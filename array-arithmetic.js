const prompt = require("prompt-sync")();

let num1 = [2, 3, 4]//, 5, 6]
let num2 = [3, 4, 5]//, 6, 7]
let result = []
let ask = []

function load() {
    
    for (let i = 0; i < 3; i++) {
        ask[i] = prompt("Type a symbol: ( * ), ( / ), ( + ), ( - ) or ( % ) : ")
        switch (ask[i]) {
            case '*':
                result[i] = num1[i] * num2[i]
            break;
            case '/':
                result[i] = num1[i] / num2[i]
            break;
            case '+':
                result[i] = num1[i] + num2[i]
            break;
            case '-':
                result[i] = num1[i] - num2[i]
            break;
            case '%':
                result[i] = num1[i] % num2[i]
            break;
        }
    }
}

load();
console.log("\n")
for (let i = 0; i < 3; i++) {
        console.log(`${num1[i]} ${ask[i]} ${num2[i]} = ${result[i]}\n`)
}

// if (ask !== '*' || ask !== '/' || ask !== '+' || ask !== '-' || ask !== '%') {
//     console.log("Type an avaible symbol.")
//     load();
// }

// var ask = prompt("Type a symbol: ( * ), ( / ), ( + ), ( - ) or ( % ) : ")
// console.log(typeof(ask))