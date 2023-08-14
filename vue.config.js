const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      title: '新竹成滷味'
    }
  },
  publicPath: './',
  outputDir: 'docs',
  transpileDependencies: true
})
