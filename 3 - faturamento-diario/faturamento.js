/*
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
 */

const data = require('./dados.json')

//Variaveis
let soma = 0
let maior = 0
let menor = 0
let dias = 0
let media  = 0


for(let i=0; i < data.length; i++){
    soma += Number(data[i].valor)

    if (i == 0){
        maior = data[i].valor
        menor = data[i].valor
    } else {
        if (data[i].valor > maior){
            maior = data[i].valor
        }
        if (data[i].valor < menor && data[i].valor !== 0){
            menor = data[i].valor
        }
    }

}

media  = soma / 30


const findDays = data.find((item)=>{
    if(item.valor > media){
        dias += 1
    }
})

console.log(`Soma do faturamento: R$ ${soma.toFixed(2)}`)
console.log(`Media do faturamento: R$ ${media.toFixed(2)}`)
console.log(`Dias acima da média: ${dias} dia(s)`)

console.log(`Maior faturamento: R$ ${maior.toFixed(2)} `)
console.log(`Menor faturamento: R$ ${menor.toFixed(2)} `)
