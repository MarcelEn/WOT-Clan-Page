var moment = require('moment');
var mysql = require('mysql');
var config = require('../.config.json');
var insertAccessToken = require('./methods/preparedStatements').insertAccessToken;

var connection = mysql.createConnection({
    host: config.host,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName
})


const login = (req, res) => {
    if (req.query.access_token && req.query.account_id && req.query.expires_at) {
        connection.query(insertAccessToken(req.query.account_id, req.query.access_token, req.query.expires_at),
            function (err) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.cookie('access_token', req.query.access_token, {maxAge: req.query.expires_at});
                    res.redirect('http://' + req.headers.host);
                }
            })
    } else {
        res.sendStatus(400);
    }
}

module.exports = login;