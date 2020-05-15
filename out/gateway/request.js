"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = __importDefault(require("cross-fetch"));
async function request(token, query, variables, name) {
    let body = {
        query,
        variables
    };
    let r = await cross_fetch_1.default('https://gateway-api.segment.com/graphql', {
        method: 'POST',
        headers: {
            authorization: 'Bearer ' + token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    let d = await r.json();
    return d.data[name];
}
exports.request = request;
async function getWorkspaceId(jwt_token, slug) {
    return (await request(jwt_token, `query GetWorkspaceId($slug: String!) {
    workspace(slug: $slug) {
      id
    }
  }`, { slug }, 'workspace')).id;
}
exports.getWorkspaceId = getWorkspaceId;
async function get_function_ids(jwt_token, slug, is_src, name) {
    async function make_request(page) {
        return (await request(jwt_token, `query Test($slug: String!, $page: String!) {
      workspace(slug: $slug) {
        functions(type: ${is_src ? 'SOURCE' : 'DESTINATION'}, pagination: {page: $page, limit: 100}) {
          data {
            id
            name
            metadata {
              ... on IntegrationMetadata {
                slug
              }
            }
          }
          pagination {
            nextPage
          }
        }
      }
    }`, { slug, page }, 'workspace')).functions;
    }
    let function_by_names = {};
    let result = await make_request('');
    while (result.data.length > 0) {
        for (let i = 0; i < result.data.length; i++) {
            let this_result = result.data[i];
            if (name) {
                if (this_result.name == name) {
                    return { id: this_result.id, slug: this_result.metadata.slug };
                }
            }
            else {
                function_by_names[this_result.name] = { id: this_result.id, slug: this_result.metadata.slug };
            }
        }
        result = await make_request(result.pagination.nextPage);
    }
    return name ? undefined : function_by_names;
}
exports.get_function_ids = get_function_ids;
//# sourceMappingURL=request.js.map