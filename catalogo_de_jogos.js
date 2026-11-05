const jogos = [
  { id: 1, nome: "Red Dead Redemption 2", preco: 199.90, nota: 9.8, categoria: "Aventura", disponivel: true },
  { id: 2, nome: "God of War Ragnarok", preco: 249.90, nota: 9.5, categoria: "Ação", disponivel: true },
  { id: 3, nome: "Cyberpunk 2077", preco: 149.90, nota: 8.7, categoria: "RPG", disponivel: false },
  { id: 4, nome: "The Witcher 3", preco: 79.90, nota: 9.7, categoria: "RPG", disponivel: true },
  { id: 5, nome: "Hogwarts Legacy", preco: 229.90, nota: 8.2, categoria: "Aventura", disponivel: true },
  { id: 6, nome: "Elden Ring", preco: 229.90, nota: 9.6, categoria: "RPG", disponivel: true }
];

const jogosDisponiveis = (jogos) => {
    return jogos.filter(jogo => jogo.disponivel)
}

const nomeDosJogos = (jogos) => {
    return jogos.map((jogo) => jogo.nome)
}

const valorTotal = (jogos) => {
    const soma = jogos.reduce((total, valor) =>  {
        return total + valor.preco
    },0)
    return soma
}

const melhoresJogos = (jogos) => {
    return jogos.filter(jogo => jogo.nota >= 9.5)
}

const resumoCatalogo = (jogos) => {

    let totalJogos = jogos.length


    let totalDisponivel = 0
    jogos.forEach(jogo => {
        if(jogo.disponivel){
            totalDisponivel += 1
        }
    });

    const soma = jogos.reduce((total, valor) => {
        return total + valor.nota
    }, 0)

    const mediaNota = jogos.length > 0 ? soma/jogos.length : 0

    let jogoCaro = null
    let maior = 0
    jogos.forEach(jogo => {
        if(jogo.preco > maior){
            maior = jogo.preco
            jogoCaro = jogo.nome
        }
    })

    


    return {
        totalJogos: totalJogos,
        disponiveis: totalDisponivel,
        mediaNotas: parseFloat(mediaNota.toFixed(2)),
        jogoMaisCaro: jogoCaro
    }


}



console.log(resumoCatalogo(jogos))
