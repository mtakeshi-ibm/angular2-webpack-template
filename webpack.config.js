'use strict';
// NODE_ENV環境変数の値によってロードするwebpack.config.xxxx を切り替え
switch (process.env.NODE_ENV) {
    //prod または production の場合
    case 'prod':
    case 'production':
        module.exports = require('./webpack-config/webpack.config.prod')({
            env: 'production'
        });
        break;
    case 'test':
    case 'testing':
        //test または testing の場合
        module.exports = require('./webpack-config/webpack.config.test')({
            env: 'test'
        });
        break;
    case 'dev':
    case 'develop':
    case 'development':
    default:
        //dev または develop または development または NODE_ENV環境変数が未設定の場合
        module.exports = require('./webpack-config/webpack.config.dev')({
            env: 'development'
        });
}
