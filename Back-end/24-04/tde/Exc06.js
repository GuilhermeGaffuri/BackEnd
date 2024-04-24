function gerarLista(n, funcaoGeracao) {
    let lista = [];
    for (let i = 0; i < n; i++) {
        lista.push(funcaoGeracao(i));
    }
    return lista;
}

function gerarDobro(indice) {
    return indice * 2;
}

const tamanho = 5; 
const listaGerada = gerarLista(tamanho, gerarDobro);
console.log(listaGerada);