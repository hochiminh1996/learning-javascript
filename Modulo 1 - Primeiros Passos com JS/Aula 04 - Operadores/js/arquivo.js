/*
    OPERADORES ARITMÉTICOS :
    Adição +
    Subtração -
    Multiplicação *
    Divisão /
    Módulo %
    Potência **

    Ordem de Precedência : 
    1 -> ()
    2 -> **
    3 -> *, /, %
    4 -> + - 
*/

var a = 5 + 3;
var b = a % 5;
var c = 5 * b ** 2;
var d = 10 - a / 2;
var e = 6 * 2 / d;
var f = b % e + 4 / e;

console.log(`A = ${a}\nB = ${b}\nC = ${c}\nD = ${d}\nE = ${e}\nF = ${f} `);


// atribuição e reatribuição
var n = 3;
n = n + 4; /* Podemos fazer n+=4 */

console.log(n)

// Incremento
n++;
