const path = require('path');

module.exports = {
  entry: './server.js', // 你的入口点
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify")
    }
  }
};

