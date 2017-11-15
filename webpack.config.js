var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports ={
	entry:"./src/app.js",
	output:{
		path:__dirname+"/dist",
		filename:"js/[name].js"
	},
	module:{
		rules:[{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: path.resolve(__dirname,"node_modules"),
			include: path.resolve(__dirname,"src"),
			options:{
				presets:["latest"]
			}
		},
		{
			test: /\.css$/,
			use:[
				 'style-loader',
		        { 
			        loader: 'css-loader',
			        options: { importLoaders: 1 } 
		      	},
		        {	  
		         	loader:'postcss-loader',
		         	options:{
		         		ident:'postcss',
		         		plugins:(loader)=>[
		         			require('autoprefixer')()
		         		]
		         	}
		     	},
			]
		},
		{
			test: /\.less$/,
			use:[
				 'style-loader',
			     'css-loader',
		        {	  
		         	loader:'postcss-loader',
		         	options:{
		         		ident:'postcss',
		         		plugins:(loader)=>[
		         			require('autoprefixer')()
		         		]
		         	}
		     	},
				'less-loader'
			]
		},
		{
			test:/\.tpl$/,
			loader:'ejs-loader'
		},
		{
			test:/\.(png|gif|jpg)$/i,
			use:[
				{
				loader:'url-loader',
				options:{
					limit:8192,
					name:'img/[name]-[hash:5].[ext]'
					}
				},
				'image-webpack-loader'
			]
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"html-withimg-loader!index.html",
			inject:"body",
			titlename:"webpack",
			// minify:{
			// 	removeComments: true,
			// 	collapseWhitespace: true
			// }
		})
	]
}