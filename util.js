const path = require('path');

module.exports = {
  normalizePath: (output) => {
    if (path.extname(output) === ''){
      return path.join(output, 'schema.json');
    }
    return output;
  }
};
