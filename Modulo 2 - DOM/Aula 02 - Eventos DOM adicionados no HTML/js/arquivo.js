/*
    Evento : é qualquer ação que um elemento pode sofrer.
    
    Events (Há diversos eventos no JS)
        mousenter : quando o mouse entra em um elemento HTML
        mousemove : quando o mouse se move dentro de um elemento HTML
        mousedown : quando o mouse clica e segura em um elemento HTML
        mouseup   : quando o click do mouse é solto em um elemento HTML
        click : quando clicamos em um elemento HTML
        mouseout : quando o mouse sai de um elemento HTML

    Função : um conjunto de linhas (bloco) que será executada quando um evento ocorrer.

    function nome(){
        bloco
    }
*/

// Método com o onclick adicionado no html
var div = document.querySelector("div#area");

// Function click
function clicar() {
    div.style.background = "red";
    div.innerHTML = "Clicou";
}

// Function entrar
function entrar() {
    div.style.background = "#09f";
    div.innerHTML = "Entrou";
}

// Function sair
function sair(){
    div.style.background = "rgba(0,0,0,.8)";
    div.innerHTML = "Saindo";
}
