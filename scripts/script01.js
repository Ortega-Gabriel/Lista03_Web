let inputValor = document.querySelector('#inputValor');
let adicionarButton = document.querySelector('#adicionarButton');
let numInformados = document.querySelector('#numInformados');
let exibirButton = document.querySelector('#exibirButton');
let resultInformados = []
let i = 0

function adicionarNumeros()
{
    
    if(i<10)
    {    
        resultInformados.push(Number(inputValor.value));
        inputValor.value = ' '
        i++
    }
    else
    {
        alert('Total de Números Atingido. (MAX: 10)')
    }
      
}
function exibirNumeros()
{
    
    let result = ' '
    for(let i = 0; i < 10; i++)
    {
    
    result += Number(resultInformados[i]) + '<br>';
    }

    numInformados.innerHTML = result
    
}
adicionarButton.onclick = function()
{
    adicionarNumeros()
}

exibirButton.onclick = function()
{
    exibirNumeros()
    
}

