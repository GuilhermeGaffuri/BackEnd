//8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.

function menorNumero(a, b, c) {
    if (a < b) {
        if (a < c) {
            return a
        }
    } else if (b < c) {
        if (b < a) {
            return b
        }
    } else if (c < b){
        if (c < a){
            return c
        }
    }
}

let a = 15
let b = 10
let c = 20
teste = menorNumero(a,b,c)
console.log("O menor número entre os três é o: " + teste)