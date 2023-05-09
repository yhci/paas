module.exports = {
entry: './server.js', // 你的入口点
output: {
filename: 'bundle.js',
path: __dirname + '/dist'
},
resolve: {
fallback: {
util: require.resolve('util/'),
os: require.resolve('os-browserify/browser'),
path: require.resolve('path-browserify')
}
}
};

