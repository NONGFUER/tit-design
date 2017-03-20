var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry:{
        app:[
            'webpack-hot-middleware/client?reload=true',
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
                test: /\.js?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'test'),
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'docs'),
                    path.resolve(__dirname, 'src/components/*'),
                ]   
            },
             { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
             { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'sass-loader','less-loader'] },
        ]
    },
    resolve: {
        alias: {
            src: path.join(__dirname, "src")
        },
        extensions:['.js','.json']
  },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]

}