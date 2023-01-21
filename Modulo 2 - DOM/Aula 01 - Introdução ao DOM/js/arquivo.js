/*
    DOM : Document Model Object
    É um conjunto de objetos dentro do navegador que dará acesso aos camponentes (elementos) internos em html

    Árvore DOM

    window é o objeto + importante. Pois todo o JS está dentro dele.

               window

    location - document - history       
                  |
                 HTML
                  
             head    body 

    
    O objeto document, que child de window, nos dará acesso aos elementos do HTML

    Podemos acessar os elementos por algumas formas :
    1º por Marca (nome da tag)
    2º por ID
    3º por Nome
    4º por Classe
    5º por Seletor (seletores do css)

    A 5 º é a + indicada 
    document.querySelector("button.class");


*/

// escrevendo e acessando o titulo da página
window.document.write(window.document.title);

window.document.write(window.navigator.appCodeName + "<br>");
// Pegando o navegador name

// Acessando elemento por nome de elemento
var p = document.getElementsByTagName("p")[1];
document.write(`Valor do parágrafo : ${p.innerText}`);
p.style.color = "#00ff00";


// Acessando por #ID
var div = document.getElementById("div");
console.log(div.innerHTML);


// Acessando por Name
var form = document.getElementsByName("form");
console.log(form);


// Acessando por Classe
var input = document.getElementsByClassName("nome_campo")[0];
console.log(input)

// Acessando por seletor CSS : FORMA MAIS INDICADA.S
var div2 = document.querySelector("div#div"); // pegando um #id
console.log(div2)

var div3 = document.querySelector("input.nome_campo"); //pegando uma classe .
console.log(div3);

div3.style.background = "red";

var paragrafo = document.querySelectorAll("p");
console.log(paragrafo[2].innerHTML)



