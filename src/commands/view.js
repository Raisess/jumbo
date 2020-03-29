const createTemplate = require('../modules/createTemplate');

const command = {
  name: 'view',
  alias: 'v',
  description: 'Use to create a new view in your aplication ex: jumbo view index',
  run: async toolbox => {
    const {
      print,
      parameters,
      template
    } = toolbox;

    const name = parameters.first;

    if(!name){
      print.error('You must specify view name');
      return;
    }
    else{
      createTemplate(template, {
        template: 'view/view.pug.ejs',
        target: `src/views/${ name }.pug`,
        props: {
          name: name
        }
      });

      createTemplate(template, {
        template: 'view/init.js.ejs',
        target: `src/mvc.js`
      });

      print.success(`Created your ${ name } view!`);
      return;
    }
  }
}

module.exports = command;
