/*
    Uma função em JavaScript é uma bloco de código reutilizável que pode ser invocado por um nome. Ela pode aceitar entradas (argumentos) e retornar uma saída. As funções são usadas para encapsular lógicas específicas e tornar o código mais organizado e fácil de manter. 


    function nome_funcao(parâmetros){
        bloco de código
    }

    nome_funcao(parametros); //chamada 

*/

function fatorial_recursivo(n) {
    if (n == 1) {
        return 1;
        // condição base. Ao chegar ao 1 ele apenas retorna o 1, quebrando  o ciclo da chamada de função
    } else {
        alert(n)
        return n * fatorial_recursivo(n - 1);
        /*
            1º chamada n = 5, resultado = 5 * fatorial_recursivo(5-1 = 4)
            2º chamada n = 4, resultado = 4 * fatorial_recursivo(4-1 = 3)
            3º chamada n = 3, resultado = 3 * fatorial_recursivo(3-1 = 2)
            4º chamada n = 2, resultado = 2 * fatorial_recursivo(2-1 = 1)

          

            A partir daqui, as chamadas anteriores começam a receber o valor retornado pelas chamadas subsequentes.

            Na 4ª chamada, o resultado é 2 * 1 = [2].
            Na 3ª chamada, o resultado é 3 * [2] = [6].
            Na 2ª chamada, o resultado é 4 * [6] = [24].
            Na 1ª chamada, o resultado é 5 * [24] = 120.
            
            O resultado de cada chamada é acumulado e passado para a próxima chamada.

            Com isso, temos o resultado final: 5! = 120.

            ou 
            1° : n = 5 
            2° : n = 4 * 5 = 20
            3° : n = 3 * 20 = 60
            4° : n = 2 * 60 = 120
            5° : n = 1 * 120 = 120

        */
    }
}


function fatorial(n) {

    let fat = n;
    for (let i = 1; i < n; i++) {
        fat *= i;
    }
    return `Fatorial de ${n} é ${fat}`;

}

function somar(n1 = 0, n2 = 0) {
    return n1 + n2;
    // definimos n1 e n2 = 0 para caso um desses valores n serem passados como parâmetros. Logo, ele atribuirá zero
}

function par_impar(num) {
    if (num % 2 == 0) {
        return "Par";
    } else {
        return "Impar";
    }
}



// alert(par_impar(20));//chamando
// alert(somar(1));


// conseguimos também chamar uma função anonômica

// alert(fatorial(4));


fatorial_recursivo(5);




/*
    n = 7

    n * fatorial (n-1)

    1° 7 * fatorial(6)  | 7 * 720 = acumulador da função (7 * 6! => 7 * 720 = 5070)
    2° 6 * fatorial(5)  | 6 * 120 = acumulador da função (6 * 5! => 6 * 120 = 720)
    3° 5 * fatorial(4)  | 5 * 24 = acumulador da função(5 * 4! => 120)
    4° 4 * fatorial(3)  | 4 * 6 = acumulador da função (4 * 3! =>  24)
    5° 3 * fatorial(2)  | 3 * 2 = acumulador da função (3 * 2! => 6)
    6° 2 * fatorial(1)  | 1 * 2 = acumulador da função (2 * 1! => 2)

*/



