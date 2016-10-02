#!/usr/bin/env node
const chalk = require('chalk');
const graphqlToJson = require('../index.js');
const util = require('../util.js');
const args = process.argv.slice(2);
const output = (args[1]) ? util.normalizePath(args[1]) : 'schema.json';
graphqlToJson({input: args[0], output})
  .then(() => chalk.green(`'${output}' successfully created`))
  .catch(err => chalk.red(err))
  .then(str => process.stdout.write(str));
