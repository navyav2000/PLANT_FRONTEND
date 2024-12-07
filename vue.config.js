const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: false, // Disable linting during save/build
};

module.exports = {
  devServer: {
    proxy: {
      '/plants': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
};


