let inputValor = document.querySelector('#inputValor');
let inputPesquisar = document.querySelector('#inputPesquisar');
let btAdicionar = document.querySelector('#btAdicionar');
let btPesquisar = document.querySelector('#btPesquisar');
let resultadoValor = document.querySelector('#resultadoValor');
let resultadoPosicao = document.querySelector('#resultadoPosicao');
let arrayValores = [];
let cont = 0;

function adicionarValor(){
    
    if(cont < 20){
        arrayValores.push(Number(inputValor.value));
        console.log(arrayValores);
        cont++;
    } else{
        alert('Máximo de Números Digitados. (Máx. 20)');
    }
}

function pesquisarValor(){

    for(let i = 0; i < arrayValores.length; i++){
        if((Number(inputPesquisar.value)) === arrayValores[i])
        {
            resultadoValor.innerHTML = 'O Valor '+ inputPesquisar.value + ' Foi Encontrado';
            resultadoPosicao.innerHTML = 'O Valor foi Encontrado na Posição: '+ (i+1);   
        }
    }

}

btAdicionar.onclick = function(){
    adicionarValor();
    inputValor.value = '';
}

btPesquisar.onclick = function(){
    pesquisarValor();
    inputPesquisar.value = '';
    
}