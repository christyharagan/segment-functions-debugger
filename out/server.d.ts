import 'segment-typescript-definitions/common';
import 'segment-typescript-definitions/custom-source';
import 'segment-typescript-definitions/custom-destination';
import { SrcFn, DestFns } from './settings';
export declare function server(args: ServerArgs): Promise<void>;
export declare type ServerArgs = {
    src_fn?: SrcFn;
    dest_fn?: DestFns;
    jwt_token: string;
    port?: number;
};
