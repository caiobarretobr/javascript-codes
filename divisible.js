const prompt = require("prompt-sync")();
const int = [9, 20, 30, 10 ,42]
const divInt = []

let num = prompt("Type a positive and integer number: ")
parseInt(num)

// if (num > 0 && isInteger(num) === false) {
    for (let i = 0; i < 5; i++ ) {
        if (int[i]%num === 0) {
            divInt.push(int[i])
        }
    }
// }

console.log(`The numbers divisible by ${num} is ${divInt}`)