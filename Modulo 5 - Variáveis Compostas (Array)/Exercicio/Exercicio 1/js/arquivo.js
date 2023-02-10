
document.querySelector("#btn").addEventListener("click", principal);
document.querySelector("#finalizar").addEventListener("click", finalizar);

let div_resultado = document.querySelector("#resultado");
let num = document.querySelector("#num");
num.focus();
let vetor = [];



function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}


function inlista(n, lista) {

    if (lista.indexOf(Number(n)) != -1) {
        // -1 é o retorno que não foi encontrado
        return true;
    } else {
        return false;
    }
}

function principal() {
    let p = document.createElement("p");


    if (isNumber(num.value) && !inlista(num.value, vetor)) {
        vetor.push(Number(num.value));
        console.log(vetor)
        let select = document.querySelector("#select_info");

        if(document.querySelector("#p-res")){
            div_resultado.removeChild(document.querySelector("#p-res"))
        }


        if (document.getElementsByClassName("input-error")[0]) {
            num.classList.remove("input-error");
            document.querySelector("#resultado").removeChild(document.querySelector("#p-error"));
        }


        if (!select) {
            let select = document.createElement("select");
            select.setAttribute("id", "select_info");

            select.size = 5;

            for (let i = 0; i < vetor.length; i++) {
                let option = document.createElement("option");
                option.value = `${vetor[i]}`;
                option.innerHTML = `Valor ${i} - ${vetor[i]}`;
                select.appendChild(option)

            }
            document.querySelector("#select-dados").appendChild(select);

        } else {
            while (select.firstChild) {
                select.removeChild(select.firstChild);

            }

            for (let i = 0; i < vetor.length; i++) {
                let option = document.createElement("option");
                option.value = `${vetor[i]}`;
                option.innerHTML = `Valor ${i} - ${vetor[i]}`;
                select.appendChild(option)

            }
        }

        num.value = "";
        num.focus();


    } else if (inlista(num.value, vetor) == true) {
        num.classList.add("input-error");
        num.focus();


        // se n existir o p-error ele vai criá-lo
        if (!document.querySelector("#p-error")) {
            p.setAttribute("id", "p-error");
            p.innerHTML = "Valor já registrado";
            div_resultado.appendChild(p)
            num.focus();

            if(document.querySelector("#p-res")){
                div_resultado.removeChild(document.querySelector("#p-res"))
            }

            // se existir um outro p,chamado p p-error2, para n ficar dois erros  remove 1
            if (document.querySelector("#p-error2")) {
                div_resultado.removeChild(document.querySelector("#p-error2"));
            }
        }

        num.value = "";
        num.focus();
    } else if (isNumber(num.value) == false || Number(num.value) == 0 || num.value.length == 0) {
        num.classList.add("input-error");
        num.focus();

        if (!document.querySelector("#p-error2")) {


            if(document.querySelector("#p-res")){
                div_resultado.removeChild(document.querySelector("#p-res"))
            }


            let p = document.createElement("p");

            p.setAttribute("id", "p-error2");
            p.innerHTML = "Campo preenchido incorretamente";
            div_resultado.appendChild(p)

            if (document.querySelector("#p-error")) {
                div_resultado.removeChild(document.querySelector("#p-error"));
            }
            num.value = "";
            num.focus();
        }

       

    }


}


function finalizar() {
    if(vetor.length==0){
        alert("Adicione valores");
    
    }else{
        let total_elementos = vetor.length;
        let maior = vetor[0];
        let menor = vetor[0];
        let soma = 0;

        for(let i in vetor){
            soma+= vetor[i];

            if(vetor[i] > maior){
                maior = vetor[i];
            }

            if(vetor[i]<menor){
                menor = vetor[i];
            }
            
        }
        div_resultado.innerHTML = "";

        if(!document.querySelector("#p-res")){
            let p_res = document.createElement("p");
            p_res.setAttribute("id","p-res");

            p_res.innerHTML = `Quant. de valores : ${total_elementos} <br>
            Maior valor : ${maior} <br>
            Menor valor : ${menor} <br>
            Soma total : ${soma} <br>
            Média : ${(soma/total_elementos).toFixed(2)}`

            div_resultado.appendChild(p_res);
        }else{
            p_res.innerHTML = `Quant. de valores : ${total_elementos} <br>
            Maior valor : ${maior} <br>
            Menor valor : ${menor} <br>
            Soma total : ${soma} <br>
            Média : ${(soma/total_elementos).toFixed(2)}`
        }

        num.focus();
    

    }
}

