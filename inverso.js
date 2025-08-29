const prompt = require("prompt-sync")()
let num = []

for (let i = 0; i<5; i++) {
   num[i] = prompt("Type a number: ")
}

for (let j = 4; j>=0; j--) {
   console.log(num[j])
}
