function soma(n1,n2){
    let soma = n1 + n2
    return new Promise ((sucess, error) =>{
        if(soma % 2 ==0){
            console.log(sucess (soma))
        }else{
            console.log(error (soma))
        }
    })
}

soma(2,4).then((sucess) =>{

    console.log("sucesso numero" + sucess)
}).catch((error)=>{
    console.log("Erro numero "+error)
})