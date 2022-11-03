import type { Configuration } from 'webpack'
import type { ProjectConfig } from './compile'

export function defineProjectConfig(config: ProjectConfig) {
  return config
}

export function removeEntryConfig(webpackConfig: Configuration) {
  delete webpackConfig.entry

  webpackConfig.plugins = webpackConfig.plugins!.filter((plugin) => {
    if (!plugin.constructor) return true
    return plugin.constructor.name !== 'HtmlWebpackPlugin'
  })
}
