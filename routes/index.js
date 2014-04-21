var wcp = require('../core/wcp');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.groups = function(req, res) {
  var groups = wcp.get_groups();
  res.render('groups', { title: 'Groups' , groups: groups});
};