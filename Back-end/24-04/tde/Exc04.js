//4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. 
//A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. 
//A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array 
//apenas com os elementos restantes

function filtrarArray(filter, arr) {
    return arr.filter(filter)
}
const meuArray = [10,20,30,40,50,60, 61]

function pares(meuArray){

    if ( meuArray %2 === 0){
        return true
    }   
}

console.log(filtrarArray(pares, meuArray))
