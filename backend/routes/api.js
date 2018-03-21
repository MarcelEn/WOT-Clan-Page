var express = require('express');
var router = express.Router();

var routes = {
  index: '/',
  login: '/login',
  time: '/time',
  all: '/*'
}

var apiMethods = {
  time: require('../api/time'),
  login: require('../api/login')
}


router.all(routes.all, function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  // console.log(req.query)
  // console.log(req.cookies);
  //res.cookie('access_token', req.query.access_token, { maxAge: req.query.expires_at });
  req.loginOk = false;
  next();
});


router.get(routes.login, function (req, res){
  apiMethods.login(req, res);
})


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
