let inputNomes = document.querySelector('#inputNomes');
let btAdicionar = document.querySelector('#btAdicionar');
let resultadoNomes = document.querySelector('#resultadoNomes');
let cont = 0
let arrayNomes = []
let nomes = ''

function adicionarNomes(){
    if(cont < 10){
        arrayNomes.push(String(inputNomes.value));
        nomes += (cont+1)+'º Nome Digitado: '+ arrayNomes[cont] + '<br>'; 
        cont++
    } else {
        alert('Máximo de Nomes Atingido. (Máx. 10)');
    }
    console.log(arrayNomes)

    resultadoNomes.innerHTML = nomes
}

btAdicionar.onclick = function(){
    adicionarNomes();
    inputNomes.value = ''
}