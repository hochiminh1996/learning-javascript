
/*
    A função prompt retorna uma string, não um number. Por isso, usamos o parseInt, para converter os dados para inteiro.

    A função parseInt irá fazer uma conversão

    Temos também : parseFloat

    Podemos também usar um comando mais recente : Number(n). Com isso, ele irá fazer o processo e retornará um valor int ou float


    Para transformar um valor em string podemos usar o String ou o toString()



*/
// valores de entrada
var nome = prompt("Digite o seu nome");
var n1 = Number(window.prompt("Digite o número 1 "));
var n2 = Number(window.prompt("Digite o número 2 "));


// Realizando o cálculo básico 
alert(`Olá, ${nome}\nO Resultado\n ${n1} e ${n2}\n\nA soma é ${n1+n2} \nA múltiplicação é : ${n1*n2}\nA divisão é : ${n1/n2}\nA subtração é : ${n1-n2}`);

document.write(`Quantidade de letras do seu nome : ${nome.length} <br>`);
document.write(`Nome : ${ nome.toUpperCase() }`)


// Tratando number

console.log(n1.toFixed(2));
// O valor ficará com apenas duas casas decimais.


