const name = ['caio', 'joao', 'vitor', 'pedro', 'sarah', 'tifany']
const height = [1.76, 1.80, 1.82, 1.72, 1.60, 1.55]
let taller = 0
let shorter = 0

for (let i = 0; i<6; i++) {
   if (height[i] > height[taller]) {
	taller = i;
   }
   if (height[i] < height[shorter]) {
	shorter = i;
   }
}

console.log(`The shorter is ${name[shorter]} with ${height[shorter]}\n`)
console.log(`The taller is ${name[taller]} with ${height[taller]}`)
