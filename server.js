var express = require('express');
//var path = require('path');

var app = express();

app.configure(function(){
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());

  app.use(app.router);
  app.use(express.static(__dirname));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.listen(8000);
console.log('Express server started on port 8000');