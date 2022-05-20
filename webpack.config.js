const path = require("path");
const HtmilWebpackPlugin = require("html-webpack-plugin");
/** @type {import('webpack').Configuration} */

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmilWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}