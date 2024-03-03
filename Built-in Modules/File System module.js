//Synchronous 

//readFileSync and writeFileSync are functions in the file-system(fs) module that allows to read the file and write the file respectively.
//Since it is synchronous it blocks the execution of further code until the read or write is not completed.


const { readFileSync, writeFileSync } = require('fs'); //here, we are destructuring individual functions(writeFileSync, readFileSync) and since fs module returns an object that has 'readFileSync' and 'writeFileSync' as properties, so, this syntax works 


const first = readFileSync('./Built-in Modules/new test folder/first.txt', 'utf-8'); 
const second = readFileSync('./Built-in Modules/new test folder/second.txt', 'utf-8');

console.log(first, second);


// //Another way without destucturing
// const fs = require('fs');
// const firstAnother = fs.readFileSync('./Built-in Modules/new test folder/first.txt', 'utf-8');
// console.log(firstAnother);