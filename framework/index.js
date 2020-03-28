const mysql = require('./database/mysql');
const firebase = require('./database/firebase');

const now = require('./utils/now');

module.exports = {
  databases: {
    mysql: mysql,
    firebase: firebase
  },
  utils: {
    now: () => now()
  }
}