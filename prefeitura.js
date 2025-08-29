const salario = [1200, 233,1110, 1090]
const filhos = [12, 3,3, 4]
let mediasal = 0
let mediafil = 0
let salperc = 0
let maiorsal

for (let i = 0; i < salario.length ; i++) {
    mediasal += salario[i]
    mediafil += filhos[i]
    if (salario[i] > maiorsal || maiorsal === undefined) {
        maiorsal = salario[i]
    }
    if (salario[i] <= 1000) {
        salperc++
    }
}

console.log(`Média salarial: ${mediasal/salario.length}`)
console.log(`Média de filhos: ${mediafil/filhos.length}`)
console.log(`Maior salário: ${maiorsal}`)
console.log(salperc)
console.log(`${salperc*100/salario.length}% das pessoas têm salários até R$1000,00.`)