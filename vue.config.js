const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {}
        },
        additionalData: `
          @import "~@/styles/variables.less";
      `
      }
    }
  },
  configureWebpack: (config) => {
    // enable top-level `await` syntax
    config.experiments = {
      topLevelAwait: true
    };
  }
});
