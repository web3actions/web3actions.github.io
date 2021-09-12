module.exports = async ({ github, context, core }) => {
  const count = 10
  core.exportVariable('PR_COUNT', count)
}