const createTemplate = require('../modules/createTemplate');

const command = {
  name: 'route',
  alias: 'r',
  description: 'Create jumbo express middleware route',
  run: async toolbox => {
    const {
      print,
      parameters,
      template
    } = toolbox;

    // console.log(parameters);

    const name = parameters.first;

    if(!name){
      print.error('You must specify route name');
      return;
    }
    else{
      createTemplate(template, {
        template: 'route.js.ejs',
        target: `src/routes/${ name }.js`,
        props: {
          name: name
        }
      });

      print.success(`${ name } route as been created!`);
      return;
    }
  }
}

module.exports = command;
