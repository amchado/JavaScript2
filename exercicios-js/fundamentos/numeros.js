const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))
// "isInteger" serve para saber se o numero é inteiro ou nao 

const avaliaçao1 = 5.784
const avaliaçao2 = 9.123

const total = avaliaçao1 * peso1 + avaliaçao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3)) 
// toFixed, serve para determinar quantas casas a virgula ira andar



