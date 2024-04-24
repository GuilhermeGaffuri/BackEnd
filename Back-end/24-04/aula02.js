const soma = function (a, b) {
    return a + b
}

console.log(soma(2,3))

const sub = (a, b) => {
    return a - b
}

console.log(sub(5,3))

const ehPar = (n) => n % 2 === 0

const quadrado = (n) => n ** 2

const teste = () => {
    const idade = 18
    if (idade >= 18) {
        var ehMaior = true
    }
    console.log(ehMaior)
}

const notas = [10,6,4,8,6,8,10]

console.log(notas)

notas.push(9) // adiciona no ultimo

console.log(notas)

notas.pop() //remove o ultimo
notas.pop()
notas.pop()

notas.unshift(0) //adiciona como primeiro
notas.shift() // remove o primeiro

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

console.log("-----------")
for (let nota of notas) {
    console.log(nota)
}

console.log("----------")

notas.forEach((nota, idx, arr) => {
    console.log(nota, idx, arr)
})


const novasNotas = notas.map((nota) => {
    return nota / 2
})

const map = (arr) => {
    for (let element of arr) {
        newArr.push(element / 2)
    }
    return newArr
}

console.log(notas)
console.log(novasNotas)
console.log(map(notas))

const aluno = {
    nome: "Jean",
    age: 18,
    ce: 0.8,
    notas: [10,8,5,8]
}

console.log(aluno.notas 
    .)map(nota => nota *)