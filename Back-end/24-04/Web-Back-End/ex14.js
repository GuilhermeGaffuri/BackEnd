//14. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se a soma deles for divisível por 5 e falso caso contrário.

function divCinco(a, b) {
    if ((a+b) % 5 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divCinco(5,5))