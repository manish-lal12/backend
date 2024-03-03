const path = require('path') //import path module which is a built-in module in JS

console.log(path.sep); //returns the default file separator in file paths in system

const filePath = path.join('/new test folder', 'new test sub folder', 'test.txt');
//joins the folders and files using the separator (\) 
console.log(filePath);

const base = path.basename(filePath); //retunrs the base name in the file path
console.log(base);

const absolute = path.resolve(__dirname, 'new test folder', 'new test sub folder', 'test.txt'); //.resolve() method resolves a sequence of paths or path segments into an absolute path.
//__dirname retuns the directory of the file

console.log(absolute);