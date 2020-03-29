const command = {
  name: 'jumbo',
  run: async toolbox => {
    const { print } = toolbox;

    print.info('Welcome to jumbo CLI');
    print.info('try jumbo -h to see some commands');
  }
}

module.exports = command;
