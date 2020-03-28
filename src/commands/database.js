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
        template: `database/${ type }.js.ejs`,
        target: `src/database/${ type }.conn.js`
      });

      print.success(`${ type } database connection created in "./src/database/mysql.conn.js"`);
      print.info('Configure it!');
    }
    else{
      print.error('This database type not exits try mysql');
    }
  }
}

module.exports = command;
