var config = require('./.config.json');
var mysql = require('mysql');
var axios = require('axios');


var connection = mysql.createConnection({
    host: config.host,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    multipleStatements: true
})


var basicSql = [
    'DROP TABLE IF EXISTS member',
    'CREATE TABLE member(account_id int primary key, account_name varchar(255), joined_at int, role varchar(255))',
    'CREATE TABLE IF NOT EXISTS accessTokens(access_token int primary key, account_id int, expires_at int)',
]


function convertSqlArraytoString(sql) {
    var newSql = '';
    for (var i = 0; i < sql.length; i++) {
        newSql += sql[i] + ';';
    }
    return newSql;
}

connection.connect(function (err) {
    if (err) throw err
    connection.query(convertSqlArraytoString(basicSql), function (err, result) {
        if (err) throw err
        updateMembers(connection, () => {
            connection.destroy()
        });
    })
})

function updateMembers(connection, callback) {
    fetchMembers()
        .then(members => {
            var count = 0;
            members.forEach(member => {
                connection.query(

                    'INSERT INTO member (account_id, account_name, joined_at, role)'
                    + 'VALUES ('
                    + member.account_id + ', '
                    + '"' + member.account_name + '", '
                    + member.joined_at + ', '
                    + '"' + member.role + '")'
                    
                , () => {
                    count++;
                    if(count>=members.length){
                        callback();
                    }
                })
            });
        })
        .catch(e => { throw e })
}


function fetchMembers() {
    return new Promise((resolve, reject) => {
        axios.get(config.wotApi + '/wgn/clans/info/?application_id=' + config.appId + '&fields=members&clan_id=' + config.clanId)
            .then(response => {
                resolve(response.data.data[config.clanId].members);
            })
            .catch(e => {
                reject(e)
            })
    })
}