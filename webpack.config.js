const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
    // devtool: 'source-map',
    mode: 'production',
    entry: path.join(__dirname, '/src/app.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                {
                    loader: 'file-loader',
                    options: {}
                }, {
                    loader: 'url-loader',
                    options: {}
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                          progressive: true,
                          quality: 65
                        },
                        optipng: {
                          enabled: false,
                        },
                        pngquant: {
                          quality: '65-90',
                          speed: 4
                        },
                        gifsicle: {
                          interlaced: false,
                        },
                        webp: {
                          quality: 75
                        }
                      }
                }
                ]
            }
        ]
    },
    plugins: [
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i
          })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        inline: true
    }
}