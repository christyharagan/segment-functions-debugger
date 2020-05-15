import Koa from 'koa'
import Router from 'koa-router'
import body from 'koa-body'
import 'segment-typescript-definitions/common'
import 'segment-typescript-definitions/custom-source'
import 'segment-typescript-definitions/custom-destination'
import _fetch from 'node-fetch'
import { SrcFn, DestFns } from './settings'

(global as any).Segment = {
  identify(i: SegmentOptions<SegmentSourceIdentify> & SegmentId) {
    console.log('--identify')
    console.log(i)
  }
};
(global as any).Segment = {
  track<E extends SegmentEvents>(t: SegmentOptions<SegmentTrackObject<E>> & SegmentId) {
    console.log('--track')
    console.log(t)
  }
};
(global as any).fetch = _fetch

export async function server(args: ServerArgs) {
  const server = new Koa()
  const router = new Router()

  server.use(body())

  router.post('/test_source', async ctx => {
    let { request, settings } = ctx.request.body as { request: SegmentSourceRequest, settings: SegmentSettings }
    if (args.src_fn) {
      args.src_fn(request, settings)
    }
    ctx.body = ''
  })

  router.post('/test_destination', async ctx => {
    if (args.dest_fn) {
      let { event, settings } = ctx.request.body as { event: SegmentProcessedEvent<SegmentTrackEvent | SegmentIdentifyEvent | SegmentAliasEvent | SegmentScreenEvent | SegmentPageEvent | SegmentGroupEvent>, settings: SegmentSettings }
      switch (event.type) {
        case 'alias': {
          if (args.dest_fn.onAlias) {
            args.dest_fn.onAlias(event, settings)
          }
          break
        }
        case 'identify': {
          if (args.dest_fn.onIdentify) {
            args.dest_fn.onIdentify(event, settings)
          }
          break
        }
        case 'page': {
          if (args.dest_fn.onPage) {
            args.dest_fn.onPage(event, settings)
          }
          break
        }
        case 'screen': {
          if (args.dest_fn.onScreen) {
            args.dest_fn.onScreen(event, settings)
          }
          break
        }
        case 'track': {
          if (args.dest_fn.onTrack) {
            args.dest_fn.onTrack(event, settings)
          }
          break
        }
        case 'group': {
          if (args.dest_fn.onGroup) {
            args.dest_fn.onGroup(event, settings)
          }
          break
        }
      }
    }
    ctx.body = ''
  })

  server.use(router.routes())
  server.listen(args.port || 8000, '0.0.0.0', () => console.log('App running on port 8000'))
}

export type ServerArgs = {
  src_fn?: SrcFn
  dest_fn?: DestFns
  jwt_token: string
  port?: number
}