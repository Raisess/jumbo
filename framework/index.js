const mysql = require('./database/mysql');
const now = require('./utils/now');

module.exports = {
  databases: {
    mysql: mysql
  },
  utils: {
    now: () => now()
  }
}