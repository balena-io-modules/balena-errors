var getKarmaConfig = require('balena-config-karma');
var packageJSON = require('./package.json');

module.exports = function(config) {
  var karmaConfig;
  karmaConfig = getKarmaConfig(packageJSON);
  return config.set(karmaConfig);
};