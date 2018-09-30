const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  baseConfig.devtool = 'sourcemap'

  defaultConfig.resolve.alias['@components'] = path.resolve(__dirname, '../src/components')
  defaultConfig.resolve.alias['@bundles'] = path.resolve(__dirname, '../src/bundles')
  defaultConfig.resolve.alias['@common'] = path.resolve(__dirname, '../src/common')
  defaultConfig.resolve.alias['@screens'] = path.resolve(__dirname, '../src/screens')
  defaultConfig.resolve.alias['@tests'] = path.resolve(__dirname, '../src/tests')

  return defaultConfig
}
