

document.getElementById("btn").addEventListener("click", principal);



function tabuada() {
    let num = Number(document.querySelector("#tabuada").value);
    //acessando valor do input e convertendo para Number

    let resultado = document.querySelector("#resultado");
    //acessando a div que receberá a tabuada

    let select = document.querySelector("#select-info");
    //buscando a existência de um seletor #id chamado select-info



    if (!select) {
        // se não for encontrado o #select-info, ou seja, vier false iremos criá-lo

        let select = document.createElement("select");
        //criando o elemento select
        select.size = 10;

        select.setAttribute("id", "select-info");
        // adicionado ao elemento o id select-info para futuras consultas e inserções de values



        // abaixo temos um for que irá calcular a tabuada
        for (let i = 1; i <= 10; i++) {
            let option = document.createElement("option");
            //criando um option a cada rodada do for

            option.classList.add("camp-options");
            //adicionado um calsse para ser manipulada no css


            option.value = `${num} x ${i} = ${num * i}`;
            // adicionado valores ao value do option

            option.innerHTML = `${num} x ${i} = ${num * i}`;
            //inserindo valores, com innerhtml no option. Podia ser innerText tb.

            select.appendChild(option)
            //colocando todos os option filho do select
        }

        resultado.appendChild(select);
        //adicionado o select como filho da nossa div resultado, que mostrará a tabuada
    } else {
        // se já existir um id #select-info, significa que já temos um select e NÃO precisamos recriá-lo, apenas mudar os valores dos option


        //Vai pegar todos os elementos filhos do select e vai removê-los 
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }


        // iremos aproveitar a existência do select e inserir novos elementos em seus filhos (options). Além disso, é o mesmo código do if acima. Aliás, poderiamos criar uma função a parte para tal função

        for (let i = 1; i <= 10; i++) {
            let option = document.createElement("option");
            option.classList.add("camp-options");
            //adicionado um calsse para ser manipulada no css

            option.value = `${num} x ${i} = ${num * i}`;
            option.innerHTML = `${num} x ${i} = ${num * i}`;
            select.appendChild(option);
        }
    }

}

function validacao() {
    let campo = document.querySelector("#tabuada");

    if (campo.value.length == 0) {
        campo.classList.add("error");
        campo.focus();
        return false;
    } else {
        // a condição abaixo verifica se existe a classe error. Como se trata de uma class, que pode retornar diversos valors, tempos que fazer a contagem. Se for maior que zero, significa que ela foi ativada anteriormente
        if (document.getElementsByClassName("error").length > 0) {
            campo.classList.remove("error");
            // acessa nosso campo e remove a classe inserida quando houve um erro
        }
        return true;
    }

}


function principal() {
    if (validacao() != true) {
        validacao();
    } else {
        tabuada();
        btn_limpar();
    }
}