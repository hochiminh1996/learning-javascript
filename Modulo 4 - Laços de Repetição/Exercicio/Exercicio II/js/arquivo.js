

document.getElementById("btn").addEventListener("click", principal);

function tabuada(){
    var num = Number(document.querySelector("#tabuada").value);
    var tab = "";

    var select = document.createElement("select");
    select.setAttribute("id", "select-info");

    var option = document.createElement("option");

   


    for(let i=0;i<=10;i++){
        tab+= `${num} x ${i} = ${num*i} <br>`;
        
        
    }
    // select.appendChild(option);
    document.querySelector("#resultado").innerHTML = tab;
    
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
    if(validacao()!=true){
        validacao();
    }else{
        tabuada();
    }

}