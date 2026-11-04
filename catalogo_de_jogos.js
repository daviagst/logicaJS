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



console.log(jogosDisponiveis(jogos))
console.log(nomeDosJogos(jogos))
console.log(valorTotal(jogos))
console.log(melhoresJogos(jogos))
