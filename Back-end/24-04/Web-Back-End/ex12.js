//12. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se o primeiro for múltiplo do segundo e falso caso contrário.

function ehMultiplo(a, b) {
    if (a % b == 0) {
        return true
    } else {
        return false
    }
}

console.log(ehMultiplo(4,3))