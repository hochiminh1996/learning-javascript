/*
    laço for

    A definição do contador e seu valor, da condição e do incrementador, tudo feito no inicio.

    for(contador; condicao; incrementador){
        bloco
    }

*/


var tab = 5;


var h1 = document.createElement("h1");
h1.innerHTML = "Usando for";

document.body.appendChild(h1);

for (var i = 1; i < 11; i++) {
    document.write(`${tab}x${i} = ${tab * i} <br>`)
}