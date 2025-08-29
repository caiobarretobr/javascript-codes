const prompt = require("prompt-sync")();

let int = []
let menor;
let maior = 0;

for (let i = 0; i < 3; i++) {
    int[i] = prompt("Digite um número ímpar: ")
    int[i] *= 1
    console.log(typeof(int[i]))
    if (int[i] > maior) {
        maior = int[i]
    } else if (int[i] < menor ) {
        menor = int[i]

    } else if (typeof(menor) === undefined) {
        menor = int[i]
    }
}

// console.log(`\nMenor valor: ${menor}\nMaior valor: ${maior}\nA soma entre os valores: ${int[0]+int[1]+int[2]}`)
console.log(typeof(menor))