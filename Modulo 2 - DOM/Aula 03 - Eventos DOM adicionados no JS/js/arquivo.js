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

var div = document.querySelector("div#area");

// adicionado eventos ao elemento selecionado
div.addEventListener("click", clicar); // NOME DO EVENTO, DPS NOME DA FUNÇÃO. **SEM ()
div.addEventListener("mouseenter", entrar);// NOME DO EVENTO, DPS NOME DA FUNÇÃO. **SEM ()
div.addEventListener("mouseout", sair)// NOME DO EVENTO, DPS NOME DA FUNÇÃO. **SEM ()


function entrar() {
    div.style.background = "#09f";
    div.innerHTML = "Entrou!!!";
}

function clicar() {
    div.style.background = "red";
    div.innerHTML = "Clicou!!!";
}

function sair() {
    div.style.background = "rgba(0,0,0,.9)";
    div.innerHTML = "Saiu!!!";
}
