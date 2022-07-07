const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			chunks: ['main']
		}),
		// new HtmlWebpackPlugin({
		// 	filename: 'portfolio.html',
		// 	template: './src/portfolio.html',

		// }),
		// new HtmlWebpackPlugin({
		// 	filename: 'proba.html',
		// 	template: './src/proba.html',

		// }),

	],

	mode: 'development',
	devServer: {
		static: './dist',
	},

	module: {
		rules: [
			{
				test: /\.js$/,           // для всех javascript-файлов
				exclude: /node_modules/, // за исключением папки с загружаемыми пакетами
				use: {
					loader: 'babel-loader', // используем транспайлер Babel
					options: {
						presets: ['@babel/preset-env'],
						//plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			// {
			// 	test: /\.(sass|scss)$/,
			// 	use: [{
			// 		loader: "style-loader" // creates style nodes from JS strings
			// 	}, {
			// 		loader: "css-loader" // translates CSS into CommonJS
			// 	}, {
			// 		loader: "sass-loader" // compiles Sass to CSS
			// 	}]
			// },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
}