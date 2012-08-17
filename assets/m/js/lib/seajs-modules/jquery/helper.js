
var github = require('../github_api.js');


exports.getLatestVersion = function(callback) {

  github.getLatestVersion('jquery/jquery', function(latestVersion) {
    callback(latestVersion);
  });

};
