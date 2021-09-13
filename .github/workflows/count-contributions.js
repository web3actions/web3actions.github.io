const { countContributions } = require('@cryptoactions/sdk')

module.exports = async (context, core, githubToken) => {
  const count = await countContributions(context.payload.issue.user.login, githubToken)
  core.setOutput('count', count)
  core.setOutput('tokens', count / 10)
}