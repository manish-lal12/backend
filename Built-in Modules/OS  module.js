const { log } = require('console');
const os = require('os'); //importing JS built-in 'OS' module

// info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
const systemUpTime = os.uptime();
console.log('the system uptime is: ' + systemUpTime + ' seconds');

// console.log(`the system uptime is ${os.uptime()} seconds`); //another way

//more info about OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);