const prompt = require("prompt-sync")();
const num = []

let ask = prompt("Try a number: ")
let finded = false;
let position = 0;

ask = Number(ask)

for (let i = 0; i < 5; i++) {
    num[i] = i+1
}

for (let j = 0; j < 5; j++) {
   if (num[j] === ask) {
	finded = true;
	position = j;
   }
}

if (finded === true) {
   console.log(`O número ${ask} existe e está na posição ${position} do array`)
} else {
   console.log(`O número ${ask} não existe no array`)
}