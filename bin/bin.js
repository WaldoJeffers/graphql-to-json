#!/usr/bin/env node
const graphqlToJson = require('../index.js');
const util = require('../util.js');
const args = process.argv.slice(2);
const output = (args[1]) ? util.normalizePath(args[1]) : 'schema.json';
graphqlToJson({input: args[0], output})
  .then(() => process.stdout.write(`'${output} successfully created'`))
  .catch(err => process.stdout.write(err));
