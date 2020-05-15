declare type SegmentEvents = string
declare type SegmentTrackProtocolUnion = {event: string, properties: {[k:string]:any}}
declare type SegmentTrackProtocol<SegmentEvents> = {[k:string]:any}
declare type SegmentObjectDefinition = {}