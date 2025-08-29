const arr = [
	[ 11, 2, 4],
	[ 4, 5, 6 ],
	[ 10, 8, -12],
]

let int
let lft = 0
let rgt = 0
let j = 2

for (let i = 0; i < 3 ; i++) {
            lft += arr[i][i]
}

for (let i = 0; i < 3 ; i++) {
        rgt += arr[i][j]
        j--
}

int = lft - rgt

if (int < 0) {
    int *= -1
}

return int