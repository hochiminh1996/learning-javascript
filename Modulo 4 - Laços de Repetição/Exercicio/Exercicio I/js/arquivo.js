


var btn = document.querySelector("#btn").addEventListener("click", principal);
// adicionado um evento ao botão



// Função para validar campos de entrada
function validar_campos(inicio, fim, step) {


    if (inicio.length == 0) {
        // alert("Problema : início")
        document.querySelector("#inicio").focus();// foca
        document.querySelector("#inicio").classList.remove("campo_focus"); //remove a class que faz o focus
        document.querySelector("#inicio").classList.add("input_error");

    } else if (fim.length == 0) {
        document.querySelector("#fim").focus();
        document.querySelector("#fim").classList.remove("campo_focus"); //remove a class que faz o focus
        document.querySelector("#fim").classList.add("input_error");


    } else if (step == 0 || step<0) {
        document.querySelector("#step").focus();// foca
        document.querySelector("#step").classList.remove("campo_focus"); //remove a class que faz o focus
        document.querySelector("#step").classList.add("input_error");

    } else {
        remocao_estilo_input();//remove
        return true;

    }
}

function remocao_estilo_input() {
    if (document.querySelector(".input_error")) {
        // removendo o estilo vermelho de erro
        var inputs = document.querySelectorAll(".input_error");
        //acessando todos os campos input q tenha a classe acima


        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("input_error");//removendo a classe
            inputs[i].classList.add("campo_focus");// adicionado a classe padrão
        }
    }
}


function contar(inicio, fim, step) {

    var msg = "";

    // se for a ordem normal for : inicio for menor que fim -> 5(inicio) e 8(fim). Contagem progressiva
    if (inicio <= fim) {

        for (let i = inicio; i <= fim; i += step) {

            /*
                Abaixo estamos adicionado virgula e ponto final.
                No entanto, estamos usando uma estrutura de controle de fluxo.

                Se a soma de i + step for > que o valor fim. Adicionamos ponto final na string que contém a sequência.

                Por exemplo : de 1 até 5 pulando 3
                1..4
                
                1(i) + 3 (salto) = 4. 4 é maior que 5?N. Logo, ele adiciona : 1,
                4(i) + 3 (salto) = 7. 7 é maior que 5?S. Logo, ele adiciona : 1,4.

            
            */
            if (i + step > fim) {
                msg += `${i}.`;
            } else {
                msg += `${i},`;
            }

        }

    }// se o valor inicial for maior que o final : 10(inicio) 5(fim). Contagem regressiva
    else if (inicio >= fim) {
        //10 5
        for (let i = inicio; i >= fim; i -= step) {

            /*
              Abaixo estamos adicionado virgula e ponto final.
              No entanto, estamos usando uma estrutura de controle de fluxo.

              Se a soma de i + step for > que o valor fim. Adicionamos ponto final na string que contém a sequência.

              Por exemplo : de 5(inicio) até 1(fim) pulando 3
              1..4
              
              5(i) - 3(salto) = 2. 2 é menor que 1?N. Logo, ele adiciona : [5,]
              2(i) - 3(salto) = -1. -1 é menor que 1?S. Logo, ele adiciona : [5,2.]

          
          */

            if (i - step < fim) {
                msg += `${i}.`;
            } else {
                msg += `${i},`;
            }
        }
    }

    // direciona a string da sequência para outra função
    montar_sequencia(msg);

}


// Função que monta a sequência
function montar_sequencia(msg) {
    var camp_result = document.querySelector("#resultado");
    // acessando a div resultado

    var p = document.querySelector("#sequencia");
    // verificando a existência de um paragrafo com id sequência


    // se não for encontrado o paragráfo com id sequência. Ele vai criá-lo;
    if (!p) {
        p = document.createElement("p");//criando o elemento p
        p.setAttribute("id", "sequencia");// adicionado o id do elemento p
        p.innerHTML = msg;//setando o conteudo da msg

        camp_result.appendChild(p);//colocando como filho da div
    }

    p.innerHTML = msg;
    //se existir o parágrafo, ele apenas muda o seu conteúdo. Possibilitando que o elemento p n fique se repetindo a cada sequência novo. Ou seja, vários elementos p um  abaixo do outro

}

function limpar(){
    var resultado = document.querySelector("#resultado");//acessando a div

    //criando um novo btn, com valor, tipo e atributo
    var btn_limpar = document.createElement("input");
    btn_limpar.type = "button";
    btn_limpar.value = "Limpar";
    btn_limpar.setAttribute("id", "btn_clear");

    resultado.append(btn_limpar);//adicionado como filho da div

    document.querySelector("#btn_clear").addEventListener("click", ()=>{
        resultado.removeChild(btn_limpar);//remove o btn

        // document.querySelector("#resultado").removeChild(btn_limpar); remove o btn sem precisar definir a variável

        resultado.removeChild(document.querySelector("#sequencia"));//remove a sequencia de valores exibida

        //limpando campos de entrada
        document.querySelector("#inicio").value = "";
        document.querySelector("#fim").value = "";
        document.querySelector("#step").value = "";

    })
    
}

function principal() {

    var inicio = (document.querySelector("#inicio").value);
    var fim = (document.querySelector("#fim").value);
    var step = Number(document.querySelector("#step").value);

    if (validar_campos(inicio, fim, step) == true) {
        contar(Number(inicio), Number(fim), step);

        if(!document.querySelector("#btn_clear")){
            limpar();
        }
    } else {
        validar_campos(inicio, fim, step);
    }

   
}






