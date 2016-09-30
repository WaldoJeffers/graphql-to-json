#!/usr/bin/env node
const graphqlToJson = require('../index.js');
const args = process.argv.slice(2);
graphqlToJson({input: args[0], output: args[1] || 'schema.json'});
