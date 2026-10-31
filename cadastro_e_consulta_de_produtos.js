const produtos = []
let proximoId = 1

const cadastrarProduto = (nome, preco, qtd) => {
    let erro = false
    if(nome.trim() === ""){
        console.log("O nome não pode estar vazio.")
        erro = true
    }

    if(preco <= 0){
        console.log("O preço deve ser um valor maior que zero.")
        erro = true
    }

    if(!Number.isInteger(qtd) || qtd < 0){
        console.log("A quantidade deve ser um número inteiro maior ou igual a zero.")
        erro = true
    }

    if(erro === true){
        return
    }


    const produto = {
        id: proximoId,
        nome: nome.trim(),
        ["preço"]: preco,
        quantidade: qtd
    }

    produtos.push(produto)
    proximoId++

    return produtos
}

const acessarProduto = (produtos, id) => {
    const produtoEscolhido = produtos.find(prod => prod.id === id)

    if(produtoEscolhido === undefined){
        return "Produto não encontrado"
    }
    return produtoEscolhido
}

const valorEstoque = (produtos) => {
    let valorTotal = 0
    for(let i = 0; i < produtos.length; i++){
        valorTotal +=  produtos[i]["preço"] * produtos[i].quantidade
    }
    return valorTotal
}

cadastrarProduto("teclado", 10, 3)
cadastrarProduto("mouse", 5, 4)

console.log(acessarProduto(produtos, 3))
console.log(valorEstoque(produtos))
if(produtos.length == 0){
    console.log("A lista esta vazia")
}else{
    console.log(produtos)
}
