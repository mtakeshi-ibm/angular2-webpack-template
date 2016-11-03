'use strict';

var path = require('path');

// Helper functions

// このhelperFunctions.jsが配置されているディレクトリの1つ上が、プロジェクトルートディレクトリと見なして絶対パスを取得
var ROOT = path.resolve(__dirname, '..');

/**
 * プロセス起動引数の中に、指定したflagが含まれている場合はtrueを返します。そうではない場合はfalseを返します。
 */
function hasProcessFlag(flag) {
    return process.argv.join('').indexOf(flag) > -1;
}

/**
 *
 */
function isWebpackDevServer() {
    return process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]));
}

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
