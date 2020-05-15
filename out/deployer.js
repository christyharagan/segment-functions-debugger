"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("typescript");
const api_1 = require("./gateway/api");
const request_1 = require("./gateway/request");
const api_2 = require("./gateway/api");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
async function deploy_functions(settings, url, debug) {
    // await Promise.all([
    //   settings.protocol.src_fn_name ? deploy_source(path.join(process.cwd(), 'src'), true, url, settings.protocol.src_fn_name, settings.protocol.work_slug, settings.server.jwt_token).then(() => {
    //     console.log('Deployed source ' + settings.protocol.src_fn_name)
    //   }) : Promise.resolve(),
    //   settings.protocol.dest_fn_name ? deploy_destination(path.join(process.cwd(), 'src'), true, url, settings.protocol.dest_fn_name, settings.protocol.work_slug, settings.server.jwt_token).then(() => {
    //     console.log('Deployed destination ' + settings.protocol.dest_fn_name)
    //   }) : Promise.resolve()
    // ])
    if (settings.protocol.src_fn_name) {
        let src = path.join(process.cwd(), 'src');
        src = fs.existsSync(src) ? src : process.cwd();
        await deploy_source(src, debug, url, settings.protocol.src_fn_name, settings.protocol.work_slug, settings.server.jwt_token);
        console.log('Deployed source ' + settings.protocol.src_fn_name);
    }
    if (settings.protocol.dest_fn_name) {
        let src = path.join(process.cwd(), 'src');
        src = fs.existsSync(src) ? src : process.cwd();
        await deploy_destination(src, debug, url, settings.protocol.dest_fn_name, settings.protocol.work_slug, settings.server.jwt_token);
        console.log('Deployed destination ' + settings.protocol.dest_fn_name);
    }
}
exports.deploy_functions = deploy_functions;
async function deploy_source(src_fn_path, debug, url, fn_name, work_slug, jwt_token, _workspaceId, _ids, retries, retry_backoff) {
    let js = '';
    if (debug) {
        js = `async function onRequest(request, settings) {
  await fetch('${url}/test_source', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      request, settings
    })
  })
}`;
    }
    else {
        let ts_path = path.join(src_fn_path, 'src_fn.ts');
        let js_path = path.join(src_fn_path, 'src_fn.js');
        if (fs.existsSync(ts_path)) {
            let sourceCode = await fs.promises.readFile(ts_path, 'utf8');
            js = typescript_1.transpile(sourceCode, {
                target: typescript_1.ScriptTarget.ES2017
            });
            js = js.replace(/export async/g, 'async').replace("import 'segment-typescript-definitions/common'", '').replace("import 'segment-typescript-definitions/custom-source'", '');
        }
        else if (fs.existsSync(js_path)) {
            let sourceCode = await fs.promises.readFile(js_path, 'utf8');
            js = sourceCode
                .replace(/exports.onRequest[\s]*=[\s]*onRequest/, '');
        }
        else {
            throw 'Cannot find src_fn file (.ts or .js)';
        }
    }
    await build_function(fn_name, true, work_slug, js, jwt_token, _workspaceId, _ids, retries, retry_backoff);
}
exports.deploy_source = deploy_source;
async function deploy_destination(dest_fn_path, debug, url, fn_name, work_slug, jwt_token, _workspaceId, _ids, retries, retry_backoff) {
    let js = '';
    if (debug) {
        js = `async function onTrack(event, settings) {
  await fetch('${url}/test_destination', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      event, settings
    })
  })
}
async function onIdentify(event, settings) {
  await fetch('${url}/test_destination', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      event, settings
    })
  })
}
async function onAlias(event, settings) {
  await fetch('${url}/test_destination', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      event, settings
    })
  })
}
async function onPage(event, settings) {
  await fetch('${url}/test_destination', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      event, settings
    })
  })
}
async function onScreen(event, settings) {
  await fetch('${url}/test_destination', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      event, settings
    })
  })
}`;
    }
    else {
        let ts_path = path.join(dest_fn_path, 'dest_fn.ts');
        let js_path = path.join(dest_fn_path, 'dest_fn.js');
        if (fs.existsSync(ts_path)) {
            let sourceCode = await fs.promises.readFile(ts_path, 'utf8');
            js = typescript_1.transpile(sourceCode, {
                target: typescript_1.ScriptTarget.ES2017
            });
            js = js.replace(/export async/g, 'async').replace("import 'segment-typescript-definitions/common'", '').replace("import 'segment-typescript-definitions/custom-destination'", '');
        }
        else {
            let sourceCode = await fs.promises.readFile(js_path, 'utf8');
            js = sourceCode
                .replace(/exports.onScreen[\s]*=[\s]*onScreen/, '')
                .replace(/exports.onGroup[\s]*=[\s]*onGroup/, '')
                .replace(/exports.onTrack[\s]*=[\s]*onTrack/, '')
                .replace(/exports.onAlias[\s]*=[\s]*onAlias/, '')
                .replace(/exports.onIdentify[\s]*=[\s]*onIdentify/, '')
                .replace(/exports.onPage[\s]*=[\s]*onPage/, '');
        }
    }
    await build_function(fn_name, false, work_slug, js, jwt_token, _workspaceId, _ids, retries, retry_backoff);
}
exports.deploy_destination = deploy_destination;
async function try_build(build, retries, retry_backoff) {
    if (retries) {
        let backoff = retry_backoff || 500;
        let last_error;
        for (let i = 0; i < retries; i++) {
            try {
                let v = await build();
                return v;
            }
            catch (e) {
                last_error = e;
                console.error('Build failed with error: ' + e);
            }
            await new Promise(resolve => setTimeout(resolve, backoff));
            backoff *= 2;
        }
        throw last_error;
    }
    else {
        return await build();
    }
}
async function build_function(fn_name, is_src, work_slug, sourceCode, jwt_token, _workspaceId, _ids, retries, retry_backoff) {
    let workspaceId = _workspaceId || (await getWorkspaceId(jwt_token, work_slug, retries, retry_backoff));
    let ids = _ids || await request_1.get_function_ids(jwt_token, work_slug, is_src);
    if (ids[fn_name]) {
        await try_build(() => api_1.updateFunction(jwt_token, {
            workspaceId,
            functionId: ids[fn_name].id,
            input: {
                sourceCode,
                settings: []
            }
        }));
    }
    else {
        await try_build(() => api_1.createFunction(jwt_token, {
            workspaceId,
            input: {
                name: fn_name,
                type: is_src ? api_2.FunctionType.Source : api_2.FunctionType.Destination,
                sourceCode,
                settings: []
            }
        }), retries, retry_backoff);
    }
}
exports.build_function = build_function;
function getWorkspaceId(jwt_token, work_slug, retries, retry_backoff) {
    return try_build(() => request_1.getWorkspaceId(jwt_token, work_slug), retries, retry_backoff);
}
// function build_function_settings(fn: CustomFunctionDefinition) {
//   return Object.keys(fn.settings).map(setting_name => {
//     let setting = fn.settings[setting_name]
//     return {
//       name: to_camel_case(setting_name),
//       description: setting.description || '',
//       label: to_snake_case(setting_name),
//       required: setting.required || false,
//       sensitive: setting.sensitive || false,
//       type: setting.type.toUpperCase() as FunctionSettingType
//     }
//   })
// }
//# sourceMappingURL=deployer.js.map