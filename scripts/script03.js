let inputValor = document.querySelector('#inputValor');
let btAdicionar = document.querySelector('#btAdicionar');
let resultadoSoma = document.querySelector('#resultadoSoma');
let soma = 0;
let i = 0;
let arrayValores = []

function adicionarValor(){
    if(i < 10){
        arrayValores.push(Number(inputValor.value));
        soma = soma + arrayValores[i];
        i++
    } else{
        alert('Máximo de 10 Números Atingido. (Máx. 10)');
    }
    console.log()
}

btAdicionar.onclick = function()
{
    adicionarValor();
    inputValor.value = ''
    resultadoSoma.innerHTML = 'A soma de Todos os Números é: ' +soma;
}