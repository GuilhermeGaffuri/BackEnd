//3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. 
//A função mapearArray deve aplicar a função recebida a cada elemento do 
//array e retornar um novo array com os elementos resultantes.

function mapearArray(função, arr) {
    return arr.map(função)
}

console.log(mapearArray(
    (n) => n * 2,
    [1, 2, 3, 4, 5]
))