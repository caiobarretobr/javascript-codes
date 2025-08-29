const date = new Date();

var day = date.getDate();
var month = (date.getUTCMonth())+1;
var year = date.getFullYear();

console.log(`Current date: ${day}/${month}/${year}`)
