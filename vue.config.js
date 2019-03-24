// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  },
  configureWebpack: config => {
    config.module.rules.push({
      resourceQuery: /blockType=story/,
      loader: 'vue-storybook'
    })
  }
}