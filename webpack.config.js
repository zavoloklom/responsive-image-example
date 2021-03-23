const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sharpAdapter = require('responsive-loader/sharp');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    devServer: {
        compress: true,
        port: 9000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: false
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|webp)$/i,
                use: {
                    loader: 'responsive-loader',
                    options: {
                        adapter: sharpAdapter
                    }
                }
            }
        ]
    }
}
