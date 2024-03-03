const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./Built-in Modules/new test folder/first.txt', 'utf-8');
const second = readFileSync('./Built-in Modules/new test folder/second.txt', 'utf-8');

writeFileSync(
    './Built-in Modules/new test folder/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'}
)

// flag is a parameter in the writeFileSync() ; default is 'w', when set to 'a', appends the existing data 