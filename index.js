#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

// INPUT
if (args.length === 0){
  throw new Error('You must provide an input path.');
}

const filepath = path.resolve(args[0]);
const schema = require(filepath);

// Ugly hack. Since graphql uses instanceof everywhere, the schema we require is not considered a valid graphql Schema because it was not created with the graphql module installed in this module We have to retrieve the "original" graphql module
const loaded_module = module.children.find(mod => path.normalize(mod.id) === filepath);
const graphql = loaded_module.children.find(mod => mod.exports.graphql).exports;

// OUTPUT
let output = 'schema.json';
if (args.length >= 2){
  output = args[1];
  if (path.extname(output) === ''){
    output = path.join(output, 'schema.json');
  }
}

// WRITE
graphql.graphql(schema, graphql.introspectionQuery)
  .then(result => JSON.stringify(result, null, 2))
  .then(json => fs.writeFileSync(output, json));
