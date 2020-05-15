import * as path from 'path'
import * as fs from 'fs'
import { ServerArgs } from './server'
import { ProtocolArgs } from './generate_protocol'
// import { onRequest } from './src_fn'
// import { onIdentify, onTrack, onAlias, onPage, onScreen } from './dest_fn'

export type SrcFn = (request: SegmentSourceRequest, settings: SegmentSettings) => void
export type DestFns = {
  onAlias?: (event: SegmentProcessedEvent<SegmentAliasEvent>, settings: SegmentSettings) => void
  onScreen?: (event: SegmentProcessedEvent<SegmentScreenEvent>, settings: SegmentSettings) => void
  onPage?: (event: SegmentProcessedEvent<SegmentPageEvent>, settings: SegmentSettings) => void
  onIdentify?: (event: SegmentProcessedEvent<SegmentIdentifyEvent>, settings: SegmentSettings) => void
  onTrack?: (event: SegmentProcessedEvent<SegmentTrackEvent>, settings: SegmentSettings) => void
  onGroup?: (event: SegmentProcessedEvent<SegmentGroupEvent>, settings: SegmentSettings) => void
}

export type Settings = { server: ServerArgs, protocol: ProtocolArgs }

export function load_settings_env(base_dir: string, src_fn?: SrcFn, dest_fn?: DestFns): Settings | undefined | number[] {
  let p = path.join(base_dir, 'settings.env')
  let error_lines: number[] = []
  if (!fs.existsSync(p)) {
    return
  }
  let s = fs.readFileSync(p, 'utf8')
  s = s.replace('/\r/g', '')
  let ss = s.split('\n')
  let server = {} as ServerArgs
  let protocol = {} as ProtocolArgs

  if (src_fn) {
    server.src_fn = src_fn
  }
  if (dest_fn) {
    server.dest_fn = dest_fn
  }
  // {
  //   identify_fn: onIdentify,
  //   track_fn: onTrack,
  //   alias_fn: onAlias,
  //   page_fn: onPage,
  //   screen_fn: onScreen
  // }

  //  = {
  //   export_dir: process.cwd()
  // }
  ss.forEach((s, i) => {
    let kv = s.split('=')
    if (kv.length == 2) {
      let key = kv[0].trim().toLowerCase()
      let value = kv[1].trim()
      switch (key) {
        case 'src_dir': {
          protocol.out_file = path.join(value, 'protocol.d.ts')
          break
        }
        case 'tp_name': {
          protocol.tp_name = value
          break
        }
        case 'work_slug': {
          protocol.work_slug = value
          break
        }
        case 'access_token': {
          protocol.access_token = value
          break
        }
        case 'jwt_token': {
          server.jwt_token = value
          break
        }
        case 'src_fn_name': {
          protocol.src_fn_name = value
          break
        }
        case 'dest_fn_name': {
          protocol.dest_fn_name = value
          break
        }
        // case 'is_src': {
        //   break
        // }
        default: {
          error_lines.push(i)
        }
      }
      // if (key == 'export_dir') {
      //   output.export_dir = path.isAbsolute(value) ? value : path.join(process.cwd(), value)
      // } else if (key == 'port') {
      //   let port = parseInt(value)
      //   if (isNaN(port)) {
      //     error_lines.push(i)
      //   }
      //   output.port = port
      // }
    } else {
      error_lines.push(i)
    }
  })
  return error_lines.length == 0 ? { server, protocol } : error_lines
}