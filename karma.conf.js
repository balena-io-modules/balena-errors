var getKarmaConfig = require('balena-config-karma');
var packageJSON = require('./package.json');

getKarmaConfig.DEFAULT_WEBPACK_CONFIG.externals = {
	fs: true
};

module.exports = function(config) {
  var karmaConfig;
  karmaConfig = getKarmaConfig(packageJSON);
  return config.set(karmaConfig);
};