/*
    Recuperando campos do HTML, adicionando um escutador de eventos e efetuando uma simples operação

*/



var btn = document.querySelector("#btn-somar");
// Acessando nosso btn

btn.addEventListener("click", somar);
// Adicionando um event ao BTN


// Função de soma
function somar(){
    var n1 = Number(document.querySelector("input#txt1").value); //valor do campo 1
    var n2 = Number(document.querySelector("input#txt2").value);//valor do campo 2
    // INPUT vem como texto, por isso usamos o Number p/ converter

    var campo = document.querySelector("input#resultado");
    // pegando o campo que receberá o resultado


    var soma = n1 + n2; //operação

    campo.value = soma; // o value do campo resultado receberá a soma
    
}