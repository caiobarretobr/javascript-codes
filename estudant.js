const prompt = require("prompt-sync")();
let name = []
let age = []

for (let i = 0; i < 3; i++ ) {
   let askN = prompt("Type a name: ")
   let askA = prompt("Type his/her age: ")
   Number(askA)
  
   name[i] = askN
   age[i]  = askA
}

for (let i = 0; i < 3; i++ ) {
   console.log(`${name[i]} has ${age[i]}\n`)
}