let num = []

for (let i = 0; i < 100; i++){
    num[i] = i+1
    if (num[i]%3 === 0) {
        console.log(`${num[i]}`)
    }
}