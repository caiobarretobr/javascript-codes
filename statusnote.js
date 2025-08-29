const note = [9, 7, 5.5, 3, 1]
let ap = 0;
let rep = 0;
let cr = 0;

for (let i = 0; i < 5; i++) {
   if (note[i] >= 7) {
	ap++;
   }
   if (note[i] < 7) {
	rep++;
   }
   if (note[i] < 3) {
	cr++;
   }
}

console.log(`${ap} aprovados, ${rep} reprovados e ${cr} em estado crítico`)