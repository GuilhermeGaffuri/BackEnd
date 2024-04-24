//11. Faça um programa que calcule a soma dos números pares de 1 a 100.

function calcular() {
    let aux = 1
    for (i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            aux += i
        }
    }
    return aux
}

console.log(calcular())