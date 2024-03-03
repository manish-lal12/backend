//Modules

//local
const secret = 'CONFIDENTIAL'; 

//share
const manish = 'manish';
const antony = 'antony';

console.log(module);  //export object is empty

module.exports = {manish, antony}; 

console.log(module); //export object shows the objects shared