import { countContributions } from '@cryptoactions/sdk'

const count = async ({ github, context, core }) => {
  const count = await countContributions(github.event.issue.user.login, github.token)
  core.setOutput('count', count)
}

export default count