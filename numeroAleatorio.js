const maiorValor = 1000
const menorValor = 1 

const numeroSecreto = sortearNumero()

function sortearNumero(){
    return parseInt(Math.random() * maiorValor + 1)
}

const displayMaiorValor = document.querySelector('#maior-valor')
const displayMenorValor = document.querySelector('#menor-valor')

displayMaiorValor.textContent = maiorValor
displayMenorValor.textContent = menorValor

console.log(numeroSecreto)
