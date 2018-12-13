const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                // options: {
                //     modules: true,
                //     importLoaders: 1,
                //     localIdentName: '[name]_[local]_[hash:base64:5]',
                //     camelCase: true
                // }
            }, {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    // plugins: function () {
                    //     return [
                    //         postcssImport,
                    //         postcssVars,
                    //         autoprefixer({
                    //             browsers: ['last 3 versions', 'Safari >= 8', 'iOS >= 8']
                    //         })
                    //     ];
                    // }
                }
            }]
        }],
    },
    devServer: {
        port: 8000,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        proxy: {
            "/api/*": "http://localhost:8090/$1"
        }
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);