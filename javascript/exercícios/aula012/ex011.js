var idade = 66
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade <18){
    console.log(`Voto opcional`)
} else if (idade >= 18 && idade < 67) {
    console.log(`Voto obrigatório`)
} else if (idade > 66) {
    console.log(`Voto opcional`)
}
