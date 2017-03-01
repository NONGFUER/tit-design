var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry:{
        app:[
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
            }
        ]
    }

}