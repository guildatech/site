
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
	cssModules: true,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

     config.module.rules.push({
      test: /\.css$/, 
      loader: ['style-loader', 'css-loader']
    });
   
    return config
  }
})
