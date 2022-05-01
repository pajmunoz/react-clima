const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    watch: true,
    watchOptions: {
        //Files or folders that are not monitored
        ignored: /node_modules/,
        //After listening to the change, it will wait for 300ms to execute the action, so as to prevent the file from being updated too fast, resulting in too high recompilation frequency  
        aggregateTimeout: 300,
        //To judge whether the file has changed or not is realized by constantly asking the system whether the specified file has changed or not
        poll: 1000
    },
    entry: [
        './src/app/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}