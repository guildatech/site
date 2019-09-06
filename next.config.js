
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//  cssModules: true,
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//      config.module.rules.push({
//       test: /\.css$/, 
//       loader: ['style-loader', 'css-loader']
//     });
   
//     return config
//   }
// })

const withCSS = require('@zeit/next-css');

function removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
  );
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withCSS({
  webpack(config) {
    removeMinimizeOptionFromCssLoaders(config);
    return config;
  },
});