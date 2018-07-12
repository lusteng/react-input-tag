const path = require('path')

module.exports = {  
    entry: [
        './example/index.js'
    ], 
    output: {
        path: __dirname + '/example',
        publicPath: '/',
        filename: 'bundle.js'
    }, 
    resolve: {
        extensions: ['.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader', "postcss-loader", 'sass-loader']
            } 
        ]
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "example"),
        port: 3001,
        open: false
    }
}