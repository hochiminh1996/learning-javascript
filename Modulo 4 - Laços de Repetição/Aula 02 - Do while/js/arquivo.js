/*
    Laço de repetição :
    do{
        contador++;
    }while(condicao)

    Laço cujo o teste condicional é feito no final


    Executa primeiro o bloco e dps faz o teste condicional
*/


var i = 1;
var tab = 2;

do {
    document.write(`${tab} x ${i} = ${tab * i} <br>`)
    i++;
} while (i < 11);