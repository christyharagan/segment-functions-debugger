import generate_tsd from 'segment-tsd-generator'
import { listAllTrackingPlans, getTrackingPlan } from 'segment-typescript-api/cjs/config_api'
import * as fs from 'fs'

export type ProtocolArgs = {
  // is_src: boolean
  src_fn_name?: string
  dest_fn_name?: string
  work_slug: string
  access_token: string
  tp_name: string
  out_file: string
}

export async function generate_protocol_definitions(args: ProtocolArgs) {
  let tps = (await listAllTrackingPlans(args.access_token, args.work_slug))
  let _tp = tps.tracking_plans.find(tp => tp.display_name == args.tp_name)
  if (!_tp) {
    throw 'No Tracking Plan with Display name ' + args.tp_name
  }
  let tp = await getTrackingPlan(args.access_token, args.work_slug, _tp.name)

  let tsd = await generate_tsd(tp)

  await fs.promises.writeFile(args.out_file, tsd, 'utf8')
}
