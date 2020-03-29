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
    const type = parameters.second;
    const port = parameters.third;

    if(!name){
      print.error('App create fail set a name to your jumbo app');
      return;
    }
    else if(!port){
      createTemplate(template, {
        template: 'package.json.ejs',
        target: `${ name }/package.json`,
        props: {
          name: name
        }
      });

      if(type === 'mvc'){
        createTemplate(template, {
          template: 'appMVC.js.ejs',
          target: `${ name }/src/app.js`,
          props: {
            name: name,
            port: 8000
          }
        });

        createTemplate(template, {
          template: 'view/init.js.ejs',
          target: `${ name }/src/mvc.js`
        });

        createTemplate(template, {
          template: 'view/view.pug.ejs',
          target: `${ name }/src/views/index.pug`
        });
      }
      else{
        createTemplate(template, {
          template: 'app.js.ejs',
          target: `${ name }/src/app.js`,
          props: {
            name: name,
            port: 8000
          }
        });
      }

      print.success(`Created new app ${ name } in port ${ 8000 }\n`);

      if(type === 'mvc'){
        print.info(`Type now:\n\ncd ${ name }\nnpm install\nnpm start\n\nCheck in your browser for "http://localhost:8000"`);
        return;
      }
      else{
        print.info(`Type now:\n\ncd ${ name }\nnpm install\nnpm start\n\nCheck in your browser for "http://localhost:8000/api"`);
        return;
      }
    }
    else{
      createTemplate(template, {
        template: 'package.json.ejs',
        target: `${ name }/package.json`,
        props: {
          name: name
        }
      });

      if(type === 'mvc'){
        createTemplate(template, {
          template: 'appMVC.js.ejs',
          target: `${ name }/src/app.js`,
          props: {
            name: name,
            port: port
          }
        });

        createTemplate(template, {
          template: 'view/init.js.ejs',
          target: `${ name }/src/mvc.js`
        });

        createTemplate(template, {
          template: 'view/view.pug.ejs',
          target: `${ name }/src/views/index.pug`
        });
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
      }
      
      print.success(`Created new app ${ name } in port ${ port }\n`);

      if(type === 'mvc'){
        print.info(`Type now:\n\ncd ${ name }\nnpm install\nnpm start\n\nCheck in your browser for "http://localhost:${ port }"`);
        return;
      }
      else{
        print.info(`Type now:\n\ncd ${ name }\nnpm install\nnpm start\n\nCheck in your browser for "http://localhost:${ port }/api"`);
        return;
      }
    }
  }
}

module.exports = command;