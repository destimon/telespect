const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ff6961', '@link-color': '#3a0300' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
