const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: __dirname + "dist",
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}, {
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.(png|jp(e*)g|svg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8000,
					name: 'img/[name].[ext]'
				}
			}]
		}, {
			test: /\.html$/,
			use: {
				loader: 'html-loader',
				options: {
					interpolate: true
				}
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/index.html"
		}),
	]
};