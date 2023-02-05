/*
    Sobre o fatorial 

    O fatorial resolve primeiramente a função fatorial(n-1) até a condição base (n==1) ser atingida, ai ele para de chamar. Quando N == 1 começa a multiplicação de cada N de cada chamada pelo acumulador da função recursiva.


    1º é feito a decrementação de N até ele ser = 1.
    Quando ele for igual a 1, ele para a recursão e começa a segunda etapa : multiplicar cada valor acumulado na função (pense que cada chamada faz parte de uma pilha com seu valor) pelo N.


*/


window.addEventListener("load", main);

function fat_recursive(n) {
    // condição base
    if (n == 1) {
        return 1;
        // se n = 1, ele retorna 1 e quebrará a chamada recursiva
    } else {
        return n * fat_recursive(n - 1);
        /*
            Vamos usar o n = 5

            Parte 1 N * (fat_recursive(n-1))
                         
            Repete o N e foca na função

            1º rodada => 5 * 4! ou n(5) * fatorial(5-1)
            2º rodada => 4 * 3!
            3º rodada => 3 * 2!  
            4º rodada => 2 * 1! 
            5º rodada => 1 * 1!


            Parte 2 : Multiplicando o N * o resultado acumulado da função em cada rodada
            de baixo pra cima

            resultado : 120
            5° rodada -> 5 * 4! => (5 * 24 = 120 (120 : acumulador da função))
            4º rodada -> 4 * 3! => (4 * 6 = 24 (24 : acumulador da função))
            3° rodada -> 3 * 2! => (3 * 2 = 6 (6 : acumulador da função))
            2° rodada -> 2 * 1! => (2 * 1 = 2 (2 : acumulador da função))
            1° rodada -> 1 * 1! => (1 * 1 = 1 (1 : acumulador da função)) 

            

            Parte 2 : Uma outra forma de ver a part 1 e 2.
            1º rodada => 5 * 4! => 5 * 4!(5 * 24 = 120 (acumulador da função))
            2º rodada => 4 * 3! => 4 * 3!(4 * 6 = 24 (acumulador da função))
            3º rodada => 3 * 2! => 3 * 2!(3 * 2 = 6 (acumulador da função))
            4º rodada => 2 * 1! => 2 * 1!(2 * 1 = 2 (acumulador da função))
            5º rodada => 1 * 1! => 1 * 1!(1 * 1 = 1 (acumulador da função)) 
-----------------------------------------------------------------------------------------

            Vamos fazer um outro exemplo n = 3

            Parte 1 => Vamos fazer N * fat_recursive(n-1)

            1° -> 3 * 2! ou 3 * fatorial(3-1=2)
            2° -> 2 * 1! ou 2 * fatorial(2-1=1)
            3º -> 1 * 1!


            Parte 2 : Agora vamos fazer a multiplicação dos N * os acumuladores da função em cada rodada. De baixo para cima

            resultado -> 6
            3° -> 3 * 2! = 3 * 2 = 6(acumulador da função)
            2º -> 2 * 1! = 2 * 1 = 2(acumulador da função)
            1° -> 1 * 1! => 1 * 1 = 1(acumulador da função)


-----------------------------------------------------------------------------------------

            Vamos fazer um outro exemplo n = 6

            Vamos repetir o n e focar na resolução da função fat(n-1)

            Parte 1 

            1º -> 6 * 5! ou 6 * fatorial(6-1=5)
            2º -> 5 * 4!
            3° -> 4 * 3!
            4º -> 3 * 2!
            5° -> 2 * 2!


            Parte 2 : fazendo a multiplicação de N pelo valor do acumulador de cada chamada. De baixo para cima

            5° -> 6 * 5! = 6 * 120 = 720 => resultado 720
            4º -> 5 * 4! = 5 * 24 = 120
            3° -> 4 * 3! = 4 * 6 = 24
            2° -> 3 * 2! = 3 * 2 = 6
            1º -> 2 * 1! = 2 






        */
    }
}


function main() {
    alert(fat_recursive(6));
}