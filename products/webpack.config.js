const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      // shoud match to 'products' of products@http://localhost:8081/remoteEntry.js in container webpack.config.js
      name: 'products',
      // sets the name of manifest file. leave it as 'remoteEntry.js' unless you've got a good reason to change it
      filename: 'remoteEntry.js',
      exposes: {
        // Aliases filenames, if someone try to import ./ProductsIndex, we will give them ./src/index
        './ProductsIndex': './src/bootstrap',
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
