const mysql = require('./database/mysql');
const firebase = require('./database/firebase');

const now = require('./utils/now');
const request = require('./utils/request');

const viewsInit = request('./viewsInit.js');

module.exports = {
  databases: {
    mysql: mysql,
    firebase: firebase
  },
  utils: {
    now: () => now(),
    request: (options, callback) => request(options, callback)
  },
  mvc: {
    init: app => viewsInit(app)
  }
}