let valores = [0,3,4,5,8]
console.log(valores)

/*
for(let pos=0; pos<valores.length;pos++) {
    console.log(`A posição ${pos} têm o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}