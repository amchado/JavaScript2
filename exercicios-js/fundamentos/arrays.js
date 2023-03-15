let valores= [5.3, 6.8, 7.5, 9.1]
console.log(valores[0], valores[3])

console.log(valores[4])

valores[4] = 10
console.log(valores)

console.log(valores.length) //length diz quantos valores tem na variavel

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores [0]
console.log(valores)

console.log(typeof valores)