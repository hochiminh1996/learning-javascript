/*
    Variáveis são espaço em  memória onde podemos armazenar valores.
    Podendo ser string, number, float ou boolean.

    Sintaxe : var nome_variavel = valor.
    
    Variável pode começar com $ _ ou letra. Não pode começar com número, espaço ou palavras reservadas.


    Javascript é uma linguagem Case Sensitive. Isso significa que ela faz distinção entre letras maiúscula e minúscula

*/

var nome = window.prompt("Digite seu nome");
var idade = parseInt(window.prompt("Digite sua idade"));

var titulo = document.createElement("h1");//criando um elemento para titulo
titulo.innerHTML = "Informações";//inserindo informações no titulo

var paragrafo = document.createElement("p");
var quebra = document.createElement("br");

paragrafo.innerHTML = `Nome : ${nome}, tipo : ${typeof (nome)} <br> Idade : ${idade}, tipo : ${typeof (idade)} <br>`;
// usado simples de template string


document.body.appendChild(titulo);//adicionado ao body
document.body.appendChild(paragrafo);//adicionado ao body





