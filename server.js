const path = require('path');
const webpack = require('webpack');
const app = require('express')();
const port = 3000;
const config = require('./webpack.config.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


app.use(webpackDevMiddleware(compiler,{
	noInfo:true,
	publicPath:config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))



app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port,()=>{
	console.log('listen localhost:%s ',port);
})