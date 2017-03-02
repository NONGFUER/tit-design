var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry:{
        app:[
            'webpack-hot-middleware/client',
            './test/app.js'
        ]
    },
    output:{
        path:path.join(__dirname,"build"),
        filename:'js/[name].js',
        publicPath:'/build/'
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'test'),
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'docs'),
                ]   
            },
             { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]

}