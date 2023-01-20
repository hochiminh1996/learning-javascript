/*
    OPERADORES RELACIONAIS

    >, <, >=, <=, =!

    *Operações envolvendo operadores R. sempre retornará um valor lógico (true/false)

    OPERADORES LÓGICOS
    E (&&) todas condições precisam ser V
    OU (||) Apenas uma condição precisa ser V
    NOT (!) Inverte os valores

    Em operações envolvendo Operadores relacionais e Lógicos, primeiro fazemos os relacionais.


    5>2 || 10<5 => faz primeiro os relacionais e dps o lógico. Resultado true
    5>2 && 10<5 => faz primeiro os relacionais e dps o lógico. Resultado false


    Ordem geral de resolução : 
    1º (operadores aritméticos)
    2º (operadores relacionais)
    3° (operadores lógico)

*/

// Relacionais
console.log(5>2);//true
console.log(7<4);// false
console.log(8>=8);// true
console.log(9<=7);// false
console.log(5==5);// true
console.log(4!=4);//false

// Lógico (&&)
console.log(true && true); // true
console.log(true && false);// false
console.log(false && true);// false
console.log(false && false);// false

// Lógico (||)
console.log(true || true); // true
console.log(true || false);// true
console.log(false || true);// true
console.log(false || false);// false

// Not (!)
console.log(!true); // vira false
console.log(!false);// vira true


console.log(5>2 || 10<5 );
console.log(5>2 && 10<5 );

// Ternário
console.log(7>=7 ? "Aprovado" : "Reprovado");