const createTemplate = require('../modules/createTemplate');

const command = {
  name: 'controller',
  alias: 'c',
  description: 'Use to create a new controller in your aplication ex: jumbo controller user',
  run: async toolbox => {
    const {
      print,
      parameters,
      template
    } = toolbox;

    const name = parameters.first;
    const className = name[0].toUpperCase() + name.slice(1);

    if(!name){
      print.error('You must specify controller name');
      return;
    }
    else{
      createTemplate(template, {
        template: 'class/Controller.js.ejs',
        target: `src/controllers/${ className }.js`,
        props: {
          name: name,
          class: className
        }
      });

      print.success(`Created your ${ className } controller!`);
      return;
    }
  }
}

module.exports = command;
