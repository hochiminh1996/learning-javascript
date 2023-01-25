

var btn = document.querySelector("#btn");

btn.addEventListener("click", verificar);
var resultado = document.querySelector("div#res");//acessando a div resultado


function verificar() {

    var ano = data().getFullYear();//ano

    var ano_digitado = Number(document.getElementById("ano").value);//ano_digitado


    var img = document.createElement("img");

    img.setAttribute("id", "foto");//criando um id para a tag img



    // Condicional 
    if (ano_digitado.length == 0 || ano_digitado > ano || ano_digitado < 1900) {
        resultado.innerHTML = "<p class='erro'>[ERRO] Preencha corretamente</p>";
    }
    else {

        var idade = ano - ano_digitado;
        var genero = "";

        // masculino
        if (document.getElementsByName("radsex")[0].checked) {

            // intervalo de idade masculino
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute("src", "img/foto-bebe-m.png");
                // Adicionando o atributo src, com seu valor, a tag img

                genero = "Criança [masculino]";

            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute("src", "img/foto-jovem-m.png")
                genero = "Jovem [masculino]";
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute("src", "img/foto-adulto-m.png")
                genero = "Adulto [masculino]";
            } else {
                // idoso
                img.setAttribute("src", "img/foto-idoso-m.png");
                genero = "Idoso [masculino]";
            }

        } else if (document.getElementsByName("radsex")[1].checked) {

            // intervalo de idade Feminino
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute("src", "img/foto-bebe-f.png");
                genero = "Criança [feminino]";


            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute("src", "img/foto-jovem-f.png")
                genero = "Jovem [feminino]";
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute("src", "img/foto-adulto-f.png");
                genero = "Adulto [feminino]";
            } else {
                // idoso
                img.setAttribute("src", "img/foto-idoso-f.png");
                genero = "Idoso [feminino]";
            }
        }

        resultado.innerHTML = `<div id='detected'>Detectamos ${genero}, ${idade} anos</div>`;
        resultado.appendChild(img);//adicionado a img como filho da div resultado

        limpar();

    }
}

// função só para retornar a date
function data() {
    var data = new Date();
    return data;
}


// função para limpar os resultados os valores do input
function limpar() {

    var btn = document.createElement("input");//criando o elemento
    btn.type = "button";//definindo o tipo
    btn.value = "Limpar";// o valor que irá aparecer
    btn.setAttribute("id", "btn-clear");//adicionando um atributo do tipo id

    resultado.appendChild(btn); //o btn será filho da div

    // abaixo criamos o event click para limpar os dados quando for clicado
    btn.addEventListener("click", () => {
        resultado.innerHTML = "";
        document.querySelector("#ano").value = "";
    });

}
