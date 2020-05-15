import { Settings } from './settings';
export declare function deploy_functions(settings: Settings, url: string, debug: boolean): Promise<void>;
export declare function deploy_source(src_fn_path: string, debug: boolean, url: string, fn_name: string, work_slug: string, jwt_token: string, _workspaceId?: string, _ids?: {
    [name: string]: {
        id: string;
        slug: string;
    };
}, retries?: number, retry_backoff?: number): Promise<void>;
export declare function deploy_destination(dest_fn_path: string, debug: boolean, url: string, fn_name: string, work_slug: string, jwt_token: string, _workspaceId?: string, _ids?: {
    [name: string]: {
        id: string;
        slug: string;
    };
}, retries?: number, retry_backoff?: number): Promise<void>;
export declare function build_function(fn_name: string, is_src: boolean, work_slug: string, sourceCode: string, jwt_token: string, _workspaceId?: string, _ids?: {
    [name: string]: {
        id: string;
        slug: string;
    };
}, retries?: number, retry_backoff?: number): Promise<void>;
