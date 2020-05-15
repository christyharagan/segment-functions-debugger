import { load_settings_env, SrcFn, DestFns } from '../settings'
import { launch } from '../ngrok'
import { server } from '../server'
import { deploy_functions } from '../deployer'
// import * as path from 'path'

export default function (src_fn?: SrcFn, dest_fn?: DestFns) {
  let settings = load_settings_env(process.cwd(), src_fn, dest_fn)
  if (settings) {
    if (Array.isArray(settings)) {
      console.error('Error on lines: ')
      console.error(JSON.stringify(settings))
    } else {
      (async function () {
        await server(settings.server)
        let [url, already_deploy] = await launch(settings.server.port || 8000)

        if (!already_deploy) {
          await deploy_functions(settings, url)

          console.log('To test the function, send data to:')
          console.log(url)
          // if (settings.protocol.src_fn_name) {
          //   await deploy_source(path.join(process.cwd(), 'src'), true, url, settings.protocol.src_fn_name, settings.protocol.work_slug, settings.server.jwt_token)
          //   console.log('Deployed source ' + settings.protocol.src_fn_name)
          // }

          // if (settings.protocol.dest_fn_name) {
          //   await deploy_destination(path.join(process.cwd(), 'src'), true, url, settings.protocol.dest_fn_name, settings.protocol.work_slug, settings.server.jwt_token)
          //   console.log('Deployed destination ' + settings.protocol.dest_fn_name)
          // }
        }
        // }
      })()
    }
  }
}