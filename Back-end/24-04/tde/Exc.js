//1. Escreva uma função chamada encontrarMaiorElemento que aceita 
//um array de números como parâmetro e retorna o maior elemento do array.

let meuArray =[1,2,3,4,5,6];

console.log(meuArray)

function encontrarMaiorElemento(arr){
    let maior =0;
    for(let elemento of arr)
    if(elemento > maior){
        maior = elemento;
}
return maior;
}

console.log(encontrarMaiorElemento(meuArray));