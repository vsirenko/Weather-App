const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        port: 3030,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                },
            },
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            },
        },
        {

            test: /\.s(a|c)ss$/,
            use: [
                "style-loader",
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })]

}