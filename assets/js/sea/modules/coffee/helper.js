
var github = require('../github_api.js');


exports.getLatestVersion = function(callback) {

  github.getLatestVersion('jashkenas/coffee-script', function(latestVersion) {
    callback(latestVersion);
  });

};
