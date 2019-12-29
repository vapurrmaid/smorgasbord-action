import * as core from '@actions/core'
import {Probe} from '@vapurrmaid/smorgasbord'

async function run(): Promise<void> {
  try {
    const uri: string = core.getInput('fqdn')
    await new Probe({uri}).execute()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
