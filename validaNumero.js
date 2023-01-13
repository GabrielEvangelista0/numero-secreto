function validaNumero(chute) {
    const numero = +chute
    if (chute > maiorValor || chute < menorValor) {
        elementoChute.innerHTML = +` 
        <div>Chute invalido: O chute deve ser entre ${menorValor} e ${maiorValor}</div>
       `
    }

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += `<div>Chute invalido: O chute deve ser um numero</div>`
    }

    if (chute == numeroSecreto) {
        document.querySelector('body').innerHTML = '<h1> Parabens Você acertou o numero</h1> <button id="jogar-de-novo">Jogar de novo</button>'
    }

    if (chute < numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'
    }

    if (chute > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>'
    }
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-de-novo') {
        window.location.reload()
    }
})