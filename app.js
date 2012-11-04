
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/flot', routes.flot);
app.get('/flotr2', routes.flotr2);
app.get('/google', routes.google);
app.get('/dygraphs', routes.dygraphs);
app.get('/rickshaw', routes.rickshaw);
app.get('/nvd3', routes.nvd3);
app.get('/mockup', routes.mockup);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
