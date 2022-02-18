const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@setup': 'src/setup',
    '@helpers': 'src/helpers',
    '@UI': 'src/components/UI'
  })(config);

  return config;
};