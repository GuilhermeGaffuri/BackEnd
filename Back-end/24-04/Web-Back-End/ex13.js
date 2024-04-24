//13. Faça um programa que verifique se um número é negativo, positivo ou zero.

function verificarNumero(a) {
    if (a < 0) {
        console.log("Numero negativo.")
    } else if(a == 0) {
        console.log("Número é igual a 0.")
    } else {
        console.log("Número positivo.")
    }
}

console.log(verificarNumero(0))