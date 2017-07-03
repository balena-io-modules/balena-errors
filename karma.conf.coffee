karmaConfig = require('resin-config-karma')
packageJSON = require('./package.json')

module.exports = (config) ->
	# Modify launchers so that we only use the ones that are available
	for name, launcher of karmaConfig.customLaunchers
		if name is 'SL_Edge'
			launcher.version = '15'

	delete karmaConfig.customLaunchers['SL_Android4.1']
	delete karmaConfig.customLaunchers['SL_Android4.2']
	delete karmaConfig.customLaunchers['SL_Android4.3']
	delete karmaConfig.customLaunchers['SL_iOS7']

	karmaConfig.logLevel = config.LOG_INFO
	karmaConfig.sauceLabs =
		testName: "#{packageJSON.name} v#{packageJSON.version}"

	config.set(karmaConfig)
