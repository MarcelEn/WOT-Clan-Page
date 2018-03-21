var moment = require('moment');

const time = () => {
    return moment().format();
}

module.exports = time;