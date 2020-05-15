"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings");
const deployer_1 = require("../deployer");
const path = __importStar(require("path"));
function default_1() {
    let settings = settings_1.load_settings_env(process.cwd());
    if (settings) {
        if (Array.isArray(settings)) {
            console.error('Error on lines: ');
            console.error(JSON.stringify(settings));
        }
        else {
            (async function () {
                if (settings.protocol.src_fn_name) {
                    await deployer_1.deploy_source(path.join(process.cwd(), 'src'), false, '', settings.protocol.src_fn_name, settings.protocol.work_slug, settings.server.jwt_token);
                    console.log('Deployed source ' + settings.protocol.src_fn_name);
                }
                if (settings.protocol.dest_fn_name) {
                    await deployer_1.deploy_destination(path.join(process.cwd(), 'src'), false, '', settings.protocol.dest_fn_name, settings.protocol.work_slug, settings.server.jwt_token);
                    console.log('Deployed destination ' + settings.protocol.dest_fn_name);
                }
            })();
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=deploy.js.map