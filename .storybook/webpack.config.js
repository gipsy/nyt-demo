const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  baseConfig.devtool = 'sourcemap'

  // add our custom loaders - or anything else that's needed
  defaultConfig.resolve.alias['@components'] = path.resolve(__dirname, '../src/components')
  defaultConfig.resolve.alias['@bundles'] = path.resolve(__dirname, '../src/bundles')
  defaultConfig.resolve.alias['@common'] = path.resolve(__dirname, '../src/common')
  defaultConfig.resolve.alias['@screens'] = path.resolve(__dirname, '../src/screens')

  return defaultConfig
}
