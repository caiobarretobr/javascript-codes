const answer = [true, false, false, true, true]
const userAnswer = [false, true, false, true, true]
let right = 0;

for (let i = 0; i < 5; i++) {
    if (answer[i] === userAnswer[i]) {
        right++
    }
}

console.log(`You answered right ${right}/${answer.length} qustions.`)