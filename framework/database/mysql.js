const mysql = require('mysql');

module.exports = {
  createConnection: data => {
    const { host, user, password, database } = data;

    try{
      return mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
      }); 
    } catch(err){
      return console.error(err);
    }
  },
  connect: connection => {
    return connection.connect(err => {
      if(err){
        console.error('error connecting: ' + err.stack);
        return;
      }
     
      console.log('connected as id ' + connection.threadId);
    });
  },
  close: connection => connection.end(),
  query: (connection, sql, callback) => {
    return connection.query(sql, (err, res, fields) => {
      if(err) console.error(err);
     
      return callback(res, fields);
    });
  }
};
