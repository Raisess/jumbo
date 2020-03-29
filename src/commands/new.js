const createTemplate = require('../modules/createTemplate');

const command = {
  name: 'new',
  alias: 'n',
  description: 'Create new jumbo express app',
  run: async toolbox => {
    const {
      print,
      parameters,
      template
    } = toolbox;

    // console.log(parameters);

    const name = parameters.first;
    const port = parameters.second;

    if(!name){
      print.error('App create fail set a name to your jumbo app');
      return;
    }
    else if(!port){
      createTemplate(template, {
        template: 'app.js.ejs',
        target: `${ name }/src/app.js`,
        props: {
          name: name,
          port: 8000
        }
      });

      createTemplate(template, {
        template: 'package.json.ejs',
        target: `${ name }/package.json`,
        props: {
          name: name
        }
      });

      print.success(`Created new app ${ name } in port ${ 8000 }\n`);
      print.info(`Type now:\n\ncd ${ name }\nnpm install\nnpm start\n\nCheck in your browser for "http://localhost:${ 8000 }/api"`);
      return;
    }
    else{
      createTemplate(template, {
        template: 'app.js.ejs',
        target: `${ name }/src/app.js`,
        props: {
          name: name,
          port: port
        }
      });

      createTemplate(template, {
        template: 'package.json.ejs',
        target: `${ name }/package.json`,
        props: {
          name: name
        }
      });
      
      print.success(`Created new app ${ name } in port ${ port }\n`);
      print.info(`Type now:\n\ncd ${ name }\nnpm install\nnpm start\n\nCheck in your browser for "http://localhost:${ port }/api"`);
      return;
    }
  }
}

module.exports = command;