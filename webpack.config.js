/* #### Setting #### */
const config = require("./_tasks/_config.json");
const path = require("path");
const ReplaceHashInFileWebpackPlugin = require("replace-hash-in-file-webpack-plugin");

/* ################# */
/* ##### Tasks ##### */
/* ################# */
module.exports = [
	{
		entry: {
			site: [`./${config.assetSrc}/js/site.js`],
			themeSwitcher: [`./${config.assetSrc}/js/themeSwitcher.js`],
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, `${config.assetDist}/js/`),
		},
		mode: process.env.NODE_ENV,
	},
	{
		name: "serviceworker",
		entry: {
			serviceworker: [`./${config.src}/serviceworker.js`],
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, `${config.dist}`),
		},
		plugins: [
			new ReplaceHashInFileWebpackPlugin([
				{
					dir: `${config.dist}`,
					files: ["serviceworker.js"],
					rules: [
						{
							search: "[contenthash]",
							replace: "[hash]",
						},
					],
				},
			]),
		],
	},
];
