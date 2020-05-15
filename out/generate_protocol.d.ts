export declare type ProtocolArgs = {
    src_fn_name?: string;
    dest_fn_name?: string;
    work_slug: string;
    access_token: string;
    tp_name: string;
    out_file: string;
};
export declare function generate_protocol_definitions(args: ProtocolArgs): Promise<void>;
