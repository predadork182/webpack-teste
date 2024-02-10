const path = require('path'); // commonsjs

module.exports = {
//   entry: './src/index.js',
    entry: ["babel-polyfill", "./src/index.js"],
    output: { // gera o arquivo dentro de dist
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'] 
                }
                }
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000
    },
}
