const prompt = require("prompt-sync")();

let login = prompt("Digite o nome do usuário: ")
let senha = prompt("Digite a senha: ")

if (senha === login) {
    console.log("\nA sua senha é igual ao seu login, digite a senha novamente")
} else {
    console.log("\nDados de login cadastrados com sucesso.")
}