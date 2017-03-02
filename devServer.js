var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var webpackDevOptions = {
    noInfo:false,
    publicPath:config.output.publicPath,
    headers:{
        'Access-Control-Allow-Origin':'*'
    }
}

app.use(require('webpack-dev-middleware')(compiler,webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler, {
  log: () => {}
}));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'test/index.html'));
});

var server = app.listen('8888','localhost',function(err){
    var port = server.address().port;
    if(err){
        console.log(err);
        return;
    }
    console.log('listening http:localhost:%s',port);
});
