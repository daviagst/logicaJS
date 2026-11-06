const jogo = {
  nome: "God of War",
  detalhes: {
    preco: 200,
    categoria: "Ação"
  }
}

const atualizarJogo = (jogo, preco) => {
    

    return {
        ...jogo,
        detalhes: {
            ...jogo.detalhes,
            preco: preco}
        
    }
}

const atualizado = atualizarJogo(jogo, 150)
console.log(atualizado.detalhes.preco)
console.log(jogo.detalhes.preco)
