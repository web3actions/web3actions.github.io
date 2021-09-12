module.exports = async ({ github, context, core }) => {
  const count = 10
  core.setOutput('count', count)
}