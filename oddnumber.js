const prompt = require("prompt-sync")();

let num = []
let menor
let maior

for (let i = 0; i < 3; i++) {
    num[i] = prompt(`Digite o ${i+1}º valor: `)
    num[i] *= 1

    while (num[i]%2 === 0) {
        num[i] = prompt(`${num[i]} não é válido. Digite um valor que seja ímpar: `)
        num[i] *= 1
    }

    if (num[i] < menor || menor === undefined) {
        menor = num[i]
    }
    if (num[i] > maior || maior === undefined) {
        maior = num[i]
    }
}

console.log(`\nMaior valor: ${maior}`)
console.log(`\nMenor valor: ${menor}`)
console.log(`\nSoma do maior e menor valor: ${maior+menor}`)