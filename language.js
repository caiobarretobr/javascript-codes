const prompt = require("prompt-sync")();
const country = ['japao', 'brasil', 'frança', 'canada', 'africa']
const language = ['Japonês', 'Português', 'França', 'Canadá', 'Inglês, Zulu, Xhosa']

let user = prompt("Type a country: ")
let response;

for (let i = 0; i < 5; i++ ) {
   if (user === country[i]) {
      response = language[i]
   }
}

console.log(`The official language of this  country is ${response}`)