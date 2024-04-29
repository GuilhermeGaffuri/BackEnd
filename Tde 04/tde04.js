

/*const soma = (number1, number2) => {
    return number1 + number2
}*/


/*console.log (soma(2,3))

console.log("--------------------------")*/

function resultadoSucess (result){
    console.log("Sucesso referente ao: " + result)
}
function resultadoErro (result){
    console.log("Erro referente ao: " + result)
}

function calcularSoma(n1,n2,resultadoSucess,resultadoErro){
    let soma = n1+n2

    if(soma % 2 ==0){
        console.log(resultadoSucess (soma))
    }else{
        console.log(resultadoErro (soma))
    }
}

console.log(calcularSoma(2,2,resultadoSucess,resultadoErro))
console.log(calcularSoma(2,3,resultadoSucess,resultadoErro))