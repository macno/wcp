var debug = require('debug')('wcp'),
    _ = require("underscore"),
    fs = require("fs"),
    path = require("path");

exports.get_groups = function() {

  var groupsFile = path.join(__dirname, "..", "data", "groups.json");
  
  var groups = [];
  if (fs.existsSync(groupsFile)) {
    groups = _.defaults(JSON.parse(fs.readFileSync(groupsFile)),[]);
  } else {
    debug('Group file not found: ' + groupsFile);
  }

  return groups;
};
