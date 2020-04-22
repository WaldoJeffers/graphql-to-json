const fs = require('fs');
const graphql = require('graphql');
const path = require('path');
const util = require('./util.js');

module.exports = ({input, output}, cb = () => {}) => {
  // INPUT
  if (!input){
    throw new Error('You must provide an input path.');
  }
  const filepath = path.resolve(input);
  const schema = require(filepath);
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
