# Arreglo.js
Library to convert multyparty parsed json to proper json.

## Installation
```npm i arreglo```

## Example
 ```javascript
 let arreglar = require('arreglo'); 
 let data = { 
     "user[0][name]": ["Anonymous_1"], 
     "user[0][age]": [25], 
     "user[1][name]": ["Anonymous_2"], 
     "user[1][age]": [25] 
 };
 let parsed_data = arreglar(data);
 console.log(parsed_data);
 /**
  *  parsed_data = {
  *     user: [
  *         {
  *              name: "Anonymous_1",
  *              age: 25     
  *         }, {
  *              name: "Anonymous_2",
  *              age: 25
  *         }
  *     ]
  *  }
  */ 
```