let num = [5,6,7]
num[3] = 6
num.push(9)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`O primeiro vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
console.log(`O valor 6 está na posição ${pos}`)
}