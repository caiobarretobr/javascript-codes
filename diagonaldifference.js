const arr1 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]


function diagonalDifference(arr) { 
    let lft = 0
    let rgt = 0
    
    for (let i = 0; i < arr1.length ; i++) {
        let j = arr.length - 1
        lft += arr[i][i]
        rgt += [i][i-j]
    }
    
    return Math.abs(lft - rgt)
}

const result = diagonalDifference(arr1)
console.log(result)