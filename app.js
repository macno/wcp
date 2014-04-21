/**
 * Module dependencies.
 */

var debug = require('debug')('wcp');

var wcp = require('./core/wcp');
var app = require('./core/webserver');
var routes = require('./routes');

app.set('port', process.env.PORT || 9090);


app.get('/', routes.index);
app.get('/groups', routes.groups);




var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
