"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRequest = void 0;
async function onRequest(request, settings) {
    let body = await request.json();
    let userId = 'test_user';
    Segment.track({
        event: 'Blog Viewed',
        properties: {
            blog_name: ''
        },
        userId
    });
}
exports.onRequest = onRequest;
//# sourceMappingURL=src_fn.js.map