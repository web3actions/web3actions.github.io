const { countContributions } = require('@cryptoactions/sdk')

module.exports = async ({ github, context, core }) => {
  console.log(github.auth)
  const count = await countContributions(context.payload.issue.user.login, github.token)
  core.setOutput('count', count)
}