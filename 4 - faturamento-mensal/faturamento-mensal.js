//Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora
const distribuidora = [
    {nome:'SP', valor: 67836.43},
    {nome: 'RJ', valor: 36678.66},
    {nome: 'MG', valor: 29229.88},
    {nome: 'ES', valor: 27165.48},
    {nome: 'OUTROS', valor: 19849.53}
]

let soma = 0

for (let i=0; i < distribuidora.length; i++){
    soma += distribuidora[i].valor
}

function findPercentual(obj, total){

    for (let i=0; i < obj.length; i++){
        percentual = (obj[i].valor / total) * 100
        console.log(`${obj[i].nome}: ${percentual.toFixed(2)}%`)
    }
}

console.log(findPercentual(distribuidora, soma))


