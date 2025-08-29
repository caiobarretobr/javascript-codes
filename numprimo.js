const prompt = require("prompt-sync")();
let num = prompt("Digite um número primo: ")
num *= 1
let div = 0

while (div !== 2) {
    div = 0;
    for (let i = 0; i <= num; i++) {
        if (num%i === 0) {
            div++
        }
    }
    if (div !==2) {
        console.log(`${num} não é um número primo.`)
        num = prompt("Digite um número primo: ")
    }
}

console.log(`${num} é um número primo.`)