const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //production
    entry: { // start with
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: { // end with
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // hard-coding the file name [contentHash = makes new file when change ]
        clean: true,
    },
    //loaders
    modules: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    //plugins
    plugins: [new HtmlWebpackPlugin({
        title: 'Just a demo',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/temp.html'), // template boilerplate file
    }),
    ],
}