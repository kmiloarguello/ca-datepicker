const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "ca-datepicker.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader" 
                ]
			},
			{
				test: /\.(mp3)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {},
				  },
				],
			  },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "ca-datepicker.css",
            chunkFilename: "id.css"
        }),
        new OptimizeCSSAssetsPlugin({}),
        devMode && new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, "src/views/index.html"),
            title: "CA",
            devMode: devMode,
            minify: false
      })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9002
    }
};
