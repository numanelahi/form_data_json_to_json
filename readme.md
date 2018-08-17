# Parser.js
Library to convert multyparty parsed json to proper json.

## Installation
> npm install form-data-parser

## Example
> cosnt parse = require('form-data-parser'); \
> const data = { \
> &nbsp;&nbsp;&nbsp;&nbsp;"user[0][name]": ["Anonymous_1"], \
> &nbsp;&nbsp;&nbsp;&nbsp;"user[0][age]": [25], \
> &nbsp;&nbsp;&nbsp;&nbsp;"user[1][name]": ["Anonymous_2"], \
> &nbsp;&nbsp;&nbsp;&nbsp;"user[1][age]": [25] \
> };\
> const data = parse(data);\
> console.log(data);\
> /*\
>   data = {\
>   &nbsp;&nbsp;&nbsp;&nbsp;user: [\
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{\
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "Anonymous_1",\
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age: 25     
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}, {\
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "Anonymous_2",\
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age: 25\
>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\
>   &nbsp;&nbsp;&nbsp;&nbsp;]\
>    }\
> */
