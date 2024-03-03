const {readFileSync, writeFileSync} = require ('fs');

console.log('start');
const first = readFileSync('./Built-in Modules/new test folder/first.txt', 'utf-8');
const second = readFileSync('./Built-in Modules/new test folder/second.txt', 'utf-8');

writeFileSync(
    './Built-in Modules/new test folder/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag : 'a' }
)
console.log('done this task');
console.log('starting new task');

//check for 'File System module 3(asynchronous).js' to see the differences between execution of code in sync vs async 
// Synchronous method involves execution of code line by line and till execution of one is completed the execution of further codes is blocked
// In Asynchronous method involves execution of code without waiting for a part of code to execute completely 