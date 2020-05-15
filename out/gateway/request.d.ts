export declare function request(token: string, query: string, variables: any, name: string): Promise<any>;
export declare function getWorkspaceId(jwt_token: string, slug: string): Promise<string>;
export declare type FunctionIdAndSlug = {
    id: string;
    slug: string;
};
export declare type FunctionIdsAndSlugs = {
    [name: string]: FunctionIdAndSlug;
};
export declare function get_function_ids(jwt_token: string, slug: string, is_src: boolean): Promise<FunctionIdsAndSlugs>;
export declare function get_function_ids(jwt_token: string, slug: string, is_src: boolean, name: string): Promise<FunctionIdAndSlug | undefined>;
