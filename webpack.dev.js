const {merge} = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = function () {
    return merge(commonConfig(), {
        mode: 'development',

        output: {
            path: helpers.root('dist'),
            filename: '[name].bundle.js',
            chunkFilename: '[id].chunk.js'
        },

        devServer: {
            static: {
                directory: helpers.root('src/'),
            },
            open: true,
            proxy: [
                {
                    context: ['/api'],
                    target: 'http://localhost:3000',
                },
            ],
            port: 7375,
            historyApiFallback: true
        },
    });
};
