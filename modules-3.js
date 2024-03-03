//CommonJS, every file is module(by default)
//Module- Encapsulated Code (only share minimum)

const names = require('./modules-1'); // imports names 
const sayHi = require('./modules-2'); //import sayHi function 


sayHi('aalok');
sayHi(names.manish);  //access manish object imported into names object (variable)
sayHi(names.antony);