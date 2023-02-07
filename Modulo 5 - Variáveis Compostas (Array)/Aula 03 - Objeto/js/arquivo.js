
document.addEventListener("DOMContentLoaded", principal);

/*
    Um objeto em programação é uma estrutura de dados que representa uma entidade do mundo real. Ele é composto por atributos, que descrevem as características da entidade, métodos, que são funções que realizam ações relacionadas à entidade, e valores, que são os dados armazenados nas propriedades.

    O typeof de um objeto é objeto. Curiosamente, em JS, o typeof de um array tb é um objeto
*/

function principal(){
    
    let pessoa = { nome : "Felippe", idade : 27, estudar(nome){
        // observe que estamos definido uma função dentro do obj, que agora é denominado de  método
        return `${nome} está estudando. Sua idade é ${this.idade}`;
            // this está fazendo referência ao atributo do objeto pessoa



    }}


    alert(pessoa.estudar("Felippe"));

}

