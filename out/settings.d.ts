import { ServerArgs } from './server';
import { ProtocolArgs } from './generate_protocol';
export declare type SrcFn = (request: SegmentSourceRequest, settings: SegmentSettings) => void;
export declare type DestFns = {
    onAlias?: (event: SegmentProcessedEvent<SegmentAliasEvent>, settings: SegmentSettings) => void;
    onScreen?: (event: SegmentProcessedEvent<SegmentScreenEvent>, settings: SegmentSettings) => void;
    onPage?: (event: SegmentProcessedEvent<SegmentPageEvent>, settings: SegmentSettings) => void;
    onIdentify?: (event: SegmentProcessedEvent<SegmentIdentifyEvent>, settings: SegmentSettings) => void;
    onTrack?: (event: SegmentProcessedEvent<SegmentTrackEvent>, settings: SegmentSettings) => void;
    onGroup?: (event: SegmentProcessedEvent<SegmentGroupEvent>, settings: SegmentSettings) => void;
};
export declare type Settings = {
    server: ServerArgs;
    protocol: ProtocolArgs;
};
export declare function load_settings_env(base_dir: string, src_fn?: SrcFn, dest_fn?: DestFns): Settings | undefined | number[];
