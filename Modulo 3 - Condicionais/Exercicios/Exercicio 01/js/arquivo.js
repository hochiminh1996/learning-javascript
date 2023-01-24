

document.addEventListener("DOMContentLoaded", load);
// Ao carregar a página, iremos adicionar um evento que carregará a nossa funçao

function load() {
    var data_hora = new Date(); //Objeto data e hora
    var txt_hora = document.querySelector("#msg");//obj msg : onde será exibido
    var img = document.querySelector("#imagem");//obj imagem : onde será mostrado a img
    var hora = data_hora.getHours();//hora atual
    var saudacao = document.querySelector("#saudacao");//div que mostrará uma saudacao

    txt_hora.innerHTML = `<p class="p">
        
        ${hora}:${data_hora.getMinutes()}:${data_hora.getSeconds()}
    </p>
    `;
    // adicionando a hora a div #msg do html

    // verificando a hora para alterar a imagem via src do html
    if (hora >= 0 && hora < 12) {
        img.src = "img/morning-p.jpg";//adicionado um novo caminho ao src da tag img
        /*
            IMPORTANTE : não usar ../img/morning-p.jpg. Já que o arquivo que está carregando a img é o index.html, não o js
        */
       saudacao.innerHTML = "<p class='p'>Bom dia :)</p>";

    } else if (hora >= 12 && hora < 18) {
        img.src = "img/afternoon-p.jpg";
        document.body.style.background = "#27436B";
        saudacao.innerHTML = "<p class='p'>Boa tarde :)</p>";
    } else {
        img.src = "img/night-p.jpg";
        document.body.style.background = "#5B3473";
        saudacao.innerHTML = "<p class='p'>Boa noite :)</p>";
    }
}

