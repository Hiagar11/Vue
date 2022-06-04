const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/assets/styles/variables.scss";'
      }
    }
  },
  transpileDependencies: true
})
