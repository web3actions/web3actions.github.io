const { countContributions } = require('@cryptoactions/sdk')

module.exports = async ({ github, context, core }) => {
  console.log(github)
  const count = await countContributions(github.event.issue.user.login, github.token)
  core.setOutput('count', count)
}