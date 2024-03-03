//CommonJS, every file is module(by default)
//Module- Encapsulated Code (only share minimum)

const names = require('./modules-1'); // imports names 
const sayHi = require('./modules-2'); //import sayHi function 
const data = require('./alternate-import_export'); //import array and object exported 

require('./test.js');  //import and "invokes" the function defined in the test.js file(module); we need not assign it to a variable to invoke the function
//Node.js wraps the module exported into a function when it is exported and hence the functions in module are invoked when it is imported
//it will return the sum as output

console.log(data);

sayHi('aalok');
sayHi(names.manish);  //access manish object imported into names object (variable)
sayHi(names.antony);