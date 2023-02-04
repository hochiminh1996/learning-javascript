/*
   Um vetor ou array é uma variável composta que armazena N elementos.
   
   Além disso, todo votor possui elemento, chave e valor.

   países = ["Brasil", "Rússia", "Índia", "China"]

    Elementos: "Brasil", "Rússia", "Índia", "China"
    Chave/índice: 0, 1, 2, 3
    Valor: "Brasil", "Rússia", "Índia", "China"

    O valor, neste caso, é igual aos elementos

*/

// Definindo a estrutura de dados array : variáveis compostas
let paises = ["Brasil", "Rússia","Índia", "China"];


// Adicionando um novo elemento manualmente na posição 4
paises[4] = "África do sul";


// Podemos adicionar usando uma função nativa do JS, sem precisar especificar posição
paises.push("África do Sul");

// Verificando o cumprimento do array
console.log(paises.length);


// Ordenando o nosso array. Já vimos a criação manual da ordenação em C :) Aqui apenas chamamos um método já existente
paises.sort();

 
// exibindo

for(let i=0;i<paises.length;i++){
    console.log(paises[i]);
}


/*Exibindo o vetor em uma estutura apropriedada para arrays e objetos (apenas)

    for(indice in vetor){
        console.log(vetor[indice])
    }
*/

for(let i in paises){
    console.log(paises[i])
}