import { generate_protocol_definitions } from '../generate_protocol'
import { load_settings_env } from '../settings'

export default function () {
  let settings = load_settings_env(process.cwd())
  if (settings) {
    if (Array.isArray(settings)) {
      console.error('Error on lines: ')
      console.error(JSON.stringify(settings))
    } else {
      (async function () {
        await generate_protocol_definitions(settings.protocol)
      })()
    }
  }
}
