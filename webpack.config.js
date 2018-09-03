const HtmlWebPackPlugin = require("html-webpack-plugin");
const { join, resolve } = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: resolve(__dirname, 'src', 'index.html'),
    filename: "./index.html"
});

module.exports = {
    entry: join(__dirname, 'src'),
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file-loader',
                options: {}
            },
        ]
    },
    plugins: [htmlWebpackPlugin]
};