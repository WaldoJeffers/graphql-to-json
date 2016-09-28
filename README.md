# graphql-to-json
A Node.js module to generate a JSON representation of your GraphQL schema

## Why
If you are using [Facebook's Relay](https://facebook.github.io/relay/), you know (or will soon find out) that you need to provide a JSON version of your GraphQL schema to the [Babel Relay Plugin](https://facebook.github.io/relay/docs/guides-babel-plugin.html). This very simple CLI tool allows you to generate the JSON representation very easily. The module does what is described in [the related section of Relay's documentation](https://facebook.github.io/relay/docs/guides-babel-plugin.html#schema-json).

## Installation
This module should be **globally** installed via npm :
```bash
npm install -g graphql-to-json
```

If you really do not want to install it globally, you can still install locally with :
```bash
npm install --save graphql-to-json
```
but you will need to run `.\node_modules\.bin\graphql-to-json PATH_TO_SCHEMA [OUTPUT_PATH]` to use, or use something like [zxc](https://www.npmjs.com/package/zxc).

## Usage
```bash
graphql-to-json PATH_TO_SCHEMA [OUTPUT_PATH]
```
where :
* `PATH_TO_SCHEMA` : relative or absolute path to a node module which exports a [GraphQLSchema instance](http://graphql.org/graphql-js/type/#graphqlschema)
* `OUTPUT_PATH` (optional) : relative or absolute path where you want to create the file containing the JSON version of your schema. If no filename is provided, the file is named `schema.json` by default. If no path is provided, the file is created where the command is executed.

## License
MIT License

Copyright (c) 2016 WaldoJeffers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
