"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_body_1 = __importDefault(require("koa-body"));
require("segment-typescript-definitions/common");
require("segment-typescript-definitions/custom-source");
require("segment-typescript-definitions/custom-destination");
const node_fetch_1 = __importDefault(require("node-fetch"));
global.Segment = {
    identify(i) {
        console.log('--identify');
        console.log(i);
    }
};
global.Segment = {
    track(t) {
        console.log('--track');
        console.log(t);
    }
};
global.fetch = node_fetch_1.default;
async function server(args) {
    const server = new koa_1.default();
    const router = new koa_router_1.default();
    server.use(koa_body_1.default());
    router.post('/test_source', async (ctx) => {
        let { request, settings } = ctx.request.body;
        if (args.src_fn) {
            args.src_fn(request, settings);
        }
        ctx.body = '';
    });
    router.post('/test_destination', async (ctx) => {
        if (args.dest_fn) {
            let { event, settings } = ctx.request.body;
            switch (event.type) {
                case 'alias': {
                    if (args.dest_fn.onAlias) {
                        args.dest_fn.onAlias(event, settings);
                    }
                    break;
                }
                case 'identify': {
                    if (args.dest_fn.onIdentify) {
                        args.dest_fn.onIdentify(event, settings);
                    }
                    break;
                }
                case 'page': {
                    if (args.dest_fn.onPage) {
                        args.dest_fn.onPage(event, settings);
                    }
                    break;
                }
                case 'screen': {
                    if (args.dest_fn.onScreen) {
                        args.dest_fn.onScreen(event, settings);
                    }
                    break;
                }
                case 'track': {
                    if (args.dest_fn.onTrack) {
                        args.dest_fn.onTrack(event, settings);
                    }
                    break;
                }
                case 'group': {
                    if (args.dest_fn.onGroup) {
                        args.dest_fn.onGroup(event, settings);
                    }
                    break;
                }
            }
        }
        ctx.body = '';
    });
    server.use(router.routes());
    server.listen(args.port || 8000, '0.0.0.0', () => console.log('App running on port 8000'));
}
exports.server = server;
//# sourceMappingURL=server.js.map