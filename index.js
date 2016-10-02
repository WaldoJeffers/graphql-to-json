const fs = require('fs');
const path = require('path');
const util = require('./util.js');

module.exports = ({input, output}, cb = () => {}) => {
  // INPUT
  if (!input){
    throw new Error('You must provide an input path.');
  }
  const filepath = path.resolve(input);
  const schema = require(filepath);
  // Ugly hack. Since graphql uses instanceof everywhere, the schema we require is not considered a valid graphql Schema because it was not created with the graphql module installed in this module We have to retrieve the "original" graphql module
  const loaded_module = module.children.find(mod => path.normalize(mod.id) === filepath);
  const graphql = loaded_module.children.find(mod => mod.exports.graphql).exports;
  // OUTPUT
  if (output){
    output = util.normalizePath(output);
  }

  // WRITE
  return graphql
    .graphql(schema, graphql.introspectionQuery)
    .then(result => JSON.stringify(result, null, 2))
    .then(json => {
      if (output){
        return new Promise((resolve, reject) => fs.writeFile(output, json, (err) => {
          if (err){
            return reject(err);
          }
          cb(json);
          resolve(json);
        }));
      }
      return json;
    });
};
