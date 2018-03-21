var express = require('express');
var router = express.Router();

var routes = {
  index: '/',
  time: '/time',
  all: '/*'
}

var apiMethods = {
  time: require('../api/time')
}


router.all(routes.all, function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  // console.log(req.query)
  // console.log(req.cookies);
  //res.cookie('access_token', req.query.access_token, { maxAge: req.query.expires_at });
  req.loginOk = false;
  next();
});





router.get(routes.index, function (req, res, next) {
  res.send('API');
});



router.get(routes.time, function (req, res, next) {
  if (req.loginOk) {
    res.send(apiMethods.time());
  } else {
    res.sendStatus(403);
  }
});

router.all(routes.all, function (req, res, next) {
  res.send('API general');
});



module.exports = router;
