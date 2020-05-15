"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_protocol_1 = require("../generate_protocol");
const settings_1 = require("../settings");
function default_1() {
    let settings = settings_1.load_settings_env(process.cwd());
    if (settings) {
        if (Array.isArray(settings)) {
            console.error('Error on lines: ');
            console.error(JSON.stringify(settings));
        }
        else {
            (async function () {
                await generate_protocol_1.generate_protocol_definitions(settings.protocol);
            })();
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=protocol.js.map