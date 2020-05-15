"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const segment_tsd_generator_1 = __importDefault(require("segment-tsd-generator"));
const config_api_1 = require("segment-typescript-api/cjs/config_api");
const fs = __importStar(require("fs"));
async function generate_protocol_definitions(args) {
    let tps = (await config_api_1.listAllTrackingPlans(args.access_token, args.work_slug));
    let _tp = tps.tracking_plans.find(tp => tp.display_name == args.tp_name);
    if (!_tp) {
        throw 'No Tracking Plan with Display name ' + args.tp_name;
    }
    let tp = await config_api_1.getTrackingPlan(args.access_token, args.work_slug, _tp.name);
    let tsd = await segment_tsd_generator_1.default(tp);
    await fs.promises.writeFile(args.out_file, tsd, 'utf8');
}
exports.generate_protocol_definitions = generate_protocol_definitions;
//# sourceMappingURL=generate_protocol.js.map