import fetch from 'cross-fetch'

export async function request(token: string, query: string, variables: any, name: string) {
  let body = {
    query,
    variables
  }
  let r = await fetch('https://gateway-api.segment.com/graphql', {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + token,
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  let d = await r.json()
  return d.data[name]
}

export async function getWorkspaceId(jwt_token: string, slug: string): Promise<string> {
  return (await request(jwt_token, `query GetWorkspaceId($slug: String!) {
    workspace(slug: $slug) {
      id
    }
  }`, { slug }, 'workspace')).id
}


export type FunctionIdAndSlug = { id: string, slug: string }
export type FunctionIdsAndSlugs = { [name: string]: FunctionIdAndSlug }
export async function get_function_ids(jwt_token: string, slug: string, is_src: boolean): Promise<FunctionIdsAndSlugs>
export async function get_function_ids(jwt_token: string, slug: string, is_src: boolean, name: string): Promise<FunctionIdAndSlug | undefined>
export async function get_function_ids(jwt_token: string, slug: string, is_src: boolean, name?: string): Promise<FunctionIdsAndSlugs | FunctionIdAndSlug | undefined> {
  async function make_request(page: string) {
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
    }`, { slug, page }, 'workspace')).functions as { data: { id: string, name: string, metadata: { slug: string } }[], pagination: { nextPage: string } }
  }

  let function_by_names: { [name: string]: { id: string, slug: string } } = {}
  let result = await make_request('')
  while (result.data.length > 0) {
    for (let i = 0; i < result.data.length; i++) {
      let this_result = result.data[i]
      if (name) {
        if (this_result.name == name) {
          return { id: this_result.id, slug: this_result.metadata.slug }
        }
      } else {
        function_by_names[this_result.name] = { id: this_result.id, slug: this_result.metadata.slug }
      }
    }

    result = await make_request(result.pagination.nextPage)
  }
  return name ? undefined : function_by_names
}