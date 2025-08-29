let num = []
let primes = []
let sum = 0
let multprimes = 1

for (let i = 0; i < 10; i++) {
    let div = 0
    num[i] = i+1

    if (num[i]%2 !== 0) {
        sum += num[i]
    }

    for (let j = 0; j <= num[i]; j++) {
        if (num[i]%j === 0) {
            div++
        }
    }
    
    if (div === 2) {
        primes.push(num[i])
    }
}

for (let i = 0; i < primes.length ; i++) {
    multprimes *= primes[i]
}

console.log(`Soma dos numeros impares: ${sum}`)
console.log(`\nSoma dos numeros primos: ${multprimes}`)