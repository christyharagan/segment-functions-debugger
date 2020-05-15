"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ngrok_1 = require("../ngrok");
const settings_1 = require("../settings");
const deployer_1 = require("../deployer");
function default_1() {
    let settings = settings_1.load_settings_env(process.cwd());
    if (settings) {
        if (Array.isArray(settings)) {
            console.error('Error on lines: ');
            console.error(JSON.stringify(settings));
        }
        else {
            (async function () {
                let [url] = await ngrok_1.launch(settings.server.port || 8000);
                await deployer_1.deploy_functions(settings, url, true);
                console.log('To test the function, send data to:');
                console.log(url);
                // if (settings.protocol.src_fn_name) {
                //   await deploy_source(path.join(process.cwd(), 'src'), true, url, settings.protocol.src_fn_name, settings.protocol.work_slug, settings.server.jwt_token)
                //   console.log('Deployed source ' + settings.protocol.src_fn_name)
                // }
                // if (settings.protocol.dest_fn_name) {
                //   await deploy_destination(path.join(process.cwd(), 'src'), true, url, settings.protocol.dest_fn_name, settings.protocol.work_slug, settings.server.jwt_token)
                //   console.log('Deployed destination ' + settings.protocol.dest_fn_name)
                // }
            })();
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=proxy.js.map