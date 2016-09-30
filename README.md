# graphql-to-json
A Node.js module to generate a JSON representation of your GraphQL schema

## Why
If you are using [Facebook's Relay](https://facebook.github.io/relay/), you know (or will soon find out) that you need to provide a JSON version of your GraphQL schema to the [Babel Relay Plugin](https://facebook.github.io/relay/docs/guides-babel-plugin.html). This very simple module allows you to generate the JSON representation very easily. The module does what is described in [the related section of Relay's documentation](https://facebook.github.io/relay/docs/guides-babel-plugin.html#schema-json).

## Installation
If you want to use **graphql-to-json** as a CLI tool, install it *globally* with npm:
```bash
npm install -g graphql-to-json
```

If you want to use it as module, install it locally:
```bash
npm install --save graphql-to-json
```

## Usage
### As a module
```javascript
graphqlToJson({input: String, [output: String]}, [callback]);
```

#### Parameters
* `input` *String* : relative or absolute path to a node module which exports a [GraphQLSchema. instance](http://graphql.org/graphql-js/type/#graphqlschema)
* `output` *String* (optional) : relative or absolute path where you want to create the file containing the JSON version of your schema. If this parameter is not provided, no file is created.
* `callback` *Function* (optional) : a function to execute when the schema is generated. The function is called with the JSON schema as its first parameter.

#### Returns
* *Promise* : a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which is resolved with the JSON schema.

### As a CLI tool
```bash
graphql-to-json INPUT [OUTPUT]
```
See above for more information about the parameters.

*NB* : the CLI just calls the function exported by the module, but if no `output` is provided, a file called `schema.json` is created where the command is executed.

## Examples
### As a module, with no callback
```javascript
// index.js
// the file that creates your GraphQLSchema is located at ./data/schema.js
const graphqlToJson = require('graphql-to-json');
graphqlToJson({input: './data/schema.js', output: './data/schema.json'});
```
### As a module, with a callback and no output parameter
```javascript
const graphqlToJson = require('graphql-to-json');
graphqlToJson({input: './data/schema.js'}, (schema) => console.log(schema));
// no output file is created
```
### As a module, with a promise and an output parameter
```javascript
const graphqlToJson = require('graphql-to-json');
graphqlToJson({
  input: './data/schema.js',
  output: './data/schema.json'
}).then((schema) => console.log(schema));
// schema.json is created in ./data
```
### As a CLI tool
```
$ graphql-to-json ./data/schema.js ./data/schema.json
```

## License
MIT License

Copyright (c) 2016 Waldo Jeffers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
