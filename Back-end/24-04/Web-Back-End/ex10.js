//10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

function numero(a) {
    let fat = 1

    for (i = a; i > 0; i--) {
        fat *= i
    }
    return fat
}

teste = numero(7)
console.log(teste)