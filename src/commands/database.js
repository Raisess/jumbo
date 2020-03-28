const createTemplate = require('../modules/createTemplate');

const command = {
  name: 'database',
  description: 'Init a database with JumboJS framework',
  run: async toolbox => {
    const {
      print,
      parameters,
      template
    } = toolbox;

    const type = parameters.first;

    if(!type){
      print.error('You must specify database ex: mysql');
    }
    else if(type === 'mysql'){
      createTemplate(template, {
        template: 'database/mysql.js.ejs',
        target: 'src/database/mysql.conn.js'
      });

      print.success('MySQL database connection created in "./src/database/mysql.conn.js"');
      print.info('Configure it!');
    }
  }
}

module.exports = command;
