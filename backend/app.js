var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var helmet = require('helmet');

var config = require('./.config.json');

var api = require('./routes/api');

var app = express();

app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));


// now using for redirect to index
// catch 404 and forward to error handler
app.use('/*', function (req, res, next) {
  // var err = new Error('Not Found');
  // err.status = 404;
  // next(err);
  request.get('http://localhost:' + config.applicationPort, function (err, response, body) {
    if (!err) {
      res.send(body);
    } else {
      console.log(err)
    }
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if(process.env.env === 'dev'){
    res.render('error');
  }else{
    res.sendStatus(400);
  }
  
});

module.exports = app;
