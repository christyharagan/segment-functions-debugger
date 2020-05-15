import { transpile, ScriptTarget } from 'typescript'
import { updateFunction, createFunction } from './gateway/api'
import { getWorkspaceId as _getWorkspaceId, get_function_ids } from './gateway/request'
import { FunctionType } from './gateway/api'
import * as fs from 'fs'
import * as path from 'path'
import { Settings } from './settings'

export async function deploy_functions(settings: Settings, url: string, debug: boolean) {
  // await Promise.all([
  //   settings.protocol.src_fn_name ? deploy_source(path.join(process.cwd(), 'src'), true, url, settings.protocol.src_fn_name, settings.protocol.work_slug, settings.server.jwt_token).then(() => {
  //     console.log('Deployed source ' + settings.protocol.src_fn_name)
  //   }) : Promise.resolve(),
  //   settings.protocol.dest_fn_name ? deploy_destination(path.join(process.cwd(), 'src'), true, url, settings.protocol.dest_fn_name, settings.protocol.work_slug, settings.server.jwt_token).then(() => {
  //     console.log('Deployed destination ' + settings.protocol.dest_fn_name)
  //   }) : Promise.resolve()
  // ])
  if (settings.protocol.src_fn_name) {
    let src = path.join(process.cwd(), 'src')
    src = fs.existsSync(src) ? src : process.cwd()
    await deploy_source(src, debug, url, settings.protocol.src_fn_name, settings.protocol.work_slug, settings.server.jwt_token)
    console.log('Deployed source ' + settings.protocol.src_fn_name)
  }

  if (settings.protocol.dest_fn_name) {
    let src = path.join(process.cwd(), 'src')
    src = fs.existsSync(src) ? src : process.cwd()
    await deploy_destination(src, debug, url, settings.protocol.dest_fn_name, settings.protocol.work_slug, settings.server.jwt_token)
    console.log('Deployed destination ' + settings.protocol.dest_fn_name)
  }
}

export async function deploy_source(src_fn_path: string, debug: boolean, url: string, fn_name: string, work_slug: string, jwt_token: string, _workspaceId?: string, _ids?: { [name: string]: { id: string, slug: string } }, retries?: number, retry_backoff?: number) {
  let js = ''

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
}`
  } else {
    let ts_path = path.join(src_fn_path, 'src_fn.ts')
    let js_path = path.join(src_fn_path, 'src_fn.js')
    if (fs.existsSync(ts_path)) {
      let sourceCode = await fs.promises.readFile(ts_path, 'utf8')

      js = transpile(sourceCode, {
        target: ScriptTarget.ES2017
      })

      js = js.replace(/export async/g, 'async').replace("import 'segment-typescript-definitions/common'", '').replace("import 'segment-typescript-definitions/custom-source'", '')
    } else if (fs.existsSync(js_path)) {
      let sourceCode = await fs.promises.readFile(js_path, 'utf8')
      js = sourceCode
        .replace(/exports.onRequest[\s]*=[\s]*onRequest/, '')
    } else {
      throw 'Cannot find src_fn file (.ts or .js)'
    }
  }

  await build_function(fn_name, true, work_slug, js, jwt_token, _workspaceId, _ids, retries, retry_backoff)
}

export async function deploy_destination(dest_fn_path: string, debug: boolean, url: string, fn_name: string, work_slug: string, jwt_token: string, _workspaceId?: string, _ids?: { [name: string]: { id: string, slug: string } }, retries?: number, retry_backoff?: number) {
  let js = ''

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
}`
  } else {
    let ts_path = path.join(dest_fn_path, 'dest_fn.ts')
    let js_path = path.join(dest_fn_path, 'dest_fn.js')

    if (fs.existsSync(ts_path)) {
      let sourceCode = await fs.promises.readFile(ts_path, 'utf8')

      js = transpile(sourceCode, {
        target: ScriptTarget.ES2017
      })

      js = js.replace(/export async/g, 'async').replace("import 'segment-typescript-definitions/common'", '').replace("import 'segment-typescript-definitions/custom-source'", '')
    } else {
      let sourceCode = await fs.promises.readFile(js_path, 'utf8')
      js = sourceCode
        .replace(/exports.onScreen[\s]*=[\s]*onScreen/, '')
        .replace(/exports.onGroup[\s]*=[\s]*onGroup/, '')
        .replace(/exports.onTrack[\s]*=[\s]*onTrack/, '')
        .replace(/exports.onAlias[\s]*=[\s]*onAlias/, '')
        .replace(/exports.onIdentify[\s]*=[\s]*onIdentify/, '')
        .replace(/exports.onPage[\s]*=[\s]*onPage/, '')
    }
  }

  await build_function(fn_name, false, work_slug, js, jwt_token, _workspaceId, _ids, retries, retry_backoff)
}

async function try_build<T>(build: () => Promise<T>, retries?: number, retry_backoff?: number) {
  if (retries) {
    let backoff = retry_backoff || 500
    let last_error: any
    for (let i = 0; i < retries; i++) {
      try {
        let v = await build()
        return v
      } catch (e) {
        last_error = e
        console.error('Build failed with error: ' + e)
      }
      await new Promise(resolve => setTimeout(resolve, backoff))
      backoff *= 2
    }
    throw last_error
  } else {
    return await build()
  }
}

export async function build_function(fn_name: string, is_src: boolean, work_slug: string, sourceCode: string, jwt_token: string, _workspaceId?: string, _ids?: { [name: string]: { id: string, slug: string } }, retries?: number, retry_backoff?: number) {
  let workspaceId = _workspaceId || (await getWorkspaceId(jwt_token, work_slug, retries, retry_backoff))
  let ids = _ids || await get_function_ids(jwt_token, work_slug, is_src)

  if (ids[fn_name]) {
    await try_build(() => updateFunction(jwt_token, {
      workspaceId,
      functionId: ids[fn_name].id,
      input: {
        sourceCode,
        settings: []
      }
    }))
  } else {
    await try_build(() => createFunction(jwt_token, {
      workspaceId,
      input: {
        name: fn_name,
        type: is_src ? FunctionType.Source : FunctionType.Destination,
        sourceCode,
        settings: []
      }
    }), retries, retry_backoff)
  }
}

function getWorkspaceId(jwt_token: string, work_slug: string, retries?: number, retry_backoff?: number): Promise<string> {
  return try_build(() => _getWorkspaceId(jwt_token, work_slug), retries, retry_backoff)
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