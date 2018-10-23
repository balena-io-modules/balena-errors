const packageJSON = require('./package.json')
const getKarmaConfig = require('balena-config-karma')

module.exports = (config) => {
	const karmaConfig = getKarmaConfig(packageJSON)

	const webpackModuleConfig = karmaConfig.webpack.module;
	webpackModuleConfig.rules = webpackModuleConfig.rules.filter((rule) =>
		// Interfers with TS here, breaking the browser tests
		rule.loader !== 'babel-loader'
	);

	config.set(karmaConfig)
}
