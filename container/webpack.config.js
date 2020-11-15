const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      // not used, added for readability, only needed for remotes
      name: 'container',
      // list projects that the container can search to get additional code
      remotes: {
        //         VVVVV related to 'name' property in products webpack config file
        // VVVV load the file at thei listed URL if anything in Container has an import like: import abc from 'products'
        products: 'products@http://localhost:8081/remoteEntry.js',
        //                  ^^^^^ URL for remoteEntry filte
        cart: 'cart@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
