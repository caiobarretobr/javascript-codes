const prompt = require("prompt-sync")();

let num = prompt("Digite um número par e positivo: ")

while (num < 0 || num%2 !== 0) {
    console.log("\nEntrada incorreta. Digite uma entrada válida.")
    num = prompt("Digite um número par e positivo: ")
}

console.log(`Entrada correta. ${num} é um número par e positivo`)