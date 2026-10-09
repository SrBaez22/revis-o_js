const prod1 = {}

prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40

console.log(prod1)


const prod2 = {
    nome: 'camisa polo',
    preco: 79.90
}


'{ "nome": "camisa polo", "preco": 79.90 }'

console.log(prod2)

function imprimirSOma(a, b) {
    soma = a + b
    return soma
}

console.log(imprimirSOma(2, 3))
console.log(imprimirSOma(3, 3))

