var lista = ['Aluno1','Aluno2','Aluno3',100]

//Buscando elemento pela posição dentro do array
console.log(lista)
console.log(lista[3])

//descobrindo oo tamanho do arrey
console.log(lista.length)

//saber se um elemento está dentro d o arrey

console.log(lista.indexOf('Aluno3'))
console.log(lista.indexOf('Aluno4'))

//alterando elemento dentro do arrey

lista[0]='Asdrubal'
console.log(lista)

//adicionar um elemento ao array

lista.push('Aluno4')
console.log(lista)

//removendo o primeiro elemento da lista

lista.shift()
console.log(lista)

//remover o ultimo elemento da lista

lista.pop()
console.log(lista)

//retornando os elementos da lista com separador

lista.join(',')
console.log(lista.join(' - '))