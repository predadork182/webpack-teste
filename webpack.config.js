const path = require('path'); // commonsjs

module.exports = {
  entry: './src/index.js',
  output: { // gera o arquivo dentro de dist
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};