//6. Crie uma função chamada ehNegativo que recebe um número como parâmetro e retorna true se for negativo e false se for positivo.

function ehNegativo(numero) {
    if (numero < 0) {
        return true
    } else {
        return false
    }
}

let numero = -1

teste = ehNegativo(numero)
console.log(teste)