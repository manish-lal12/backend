//Asynchronous

const { readFile, writeFile } = require('fs'); //import readFile and writeFile functions from fs module
//these functions are asynchronous
console.log('start');
readFile('./Built-in Modules/new test folder/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
    }
    const first = result;
    readFile('./Built-in Modules/new test folder/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result;
        writeFile(
            './Built-in Modules/new test folder/result-async.txt',
            `Here is the result : ${first}, ${second}`
            , (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log('done this task');
            }
        )
    })
})
console.log('starting new task');
//check result in the 'result-async.txt' file
