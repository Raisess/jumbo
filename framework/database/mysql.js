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
      throw new Error(err);
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
    return connection.query(sql, callback(err, results, fields));
  }
};
