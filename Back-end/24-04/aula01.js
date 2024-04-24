console.log("Olá mundo")

let teste = 10;
var nome = "Igor" // nao usamos
const ehPar = true

teste = 12;

console.log(teste)
console.log(nome)
console.log(ehPar)

console.log(2 + 2)
console.log(2 * 3)
console.log(10 / 2)
console.log(8 - 3)
console.log(3 % 2)
console.log(parseInt(5 / 2))

console.log(0.1 + 0.2) // resultado errado

console.log(2 ** 3)


console.log("Tabela verdade &&")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


console.log("\n\nTabela verdade ||")
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log("\n\nComparacoes")
console.log(1 == "1")
console.log(1 === '1')
console.log(1 === 1)
console.log(1 != 2)
console.log(1 != '1')
console.log(1 != '1')
console.log(1 !== '1')
console.log(1 !== 2)
console.log(1 < 2)
console.log(1 <= 1)
console.log(1 >= 2)

let idade = 19
if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}


const code = 1
switch (code) {
    case 1:
        console.log("Ligar Tv")
        break
    case 2:
        console.log("Desligar Tv")
        break
    default:
        console.log("Sei la")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let i = 10
while(i < 30) {
    console.log(i)
    i *= 2
}

function soma(a, b) {
    return a + b
}

const result = soma(2, 3)
console.log(result)

