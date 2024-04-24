//2. Escreva uma função chamada somaElementosPares que aceita um array de 
//números como parâmetro e retorna a soma de todos os elementos pares do array.

let meuArray =[10,20,30,40,10,23,21,43];

const somaElementosPares = (n) => n % 2 === 0;

const soma = meuArray.filter(somaElementosPares).reduce((a,b) => a + b);

console.log(soma);