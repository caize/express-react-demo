const path =require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry:{
		main:[
			'webpack-hot-middleware/client',
			'./src/components/entry.js'
		]
	},
	output:{
		path:path.join(__dirname,'dist'),
		filename:'bundle.js',
		publicPath:'/static/'
	},
	module:{
		loaders:[
			{test:/\.(js|jsx)$/,loader:'babel-loader',exclude:/node_modules/},
			{test:/\.(css)$/,loader:'style!css'},
			{test:/\.(jpg|png|svg)$/,loader:'url?limit=9182'}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
			"process.env":{
				NODE_ENV:JSON.stringify('production')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			},
			mangle:{
				except:['$','module','exports']
			}
		})
	],
	resolve:{
		extensions:['','.js','.jsx']
	}
}
module.exports =config;