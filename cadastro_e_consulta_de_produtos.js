const produtos = []
let proximoId = 1

const cadastrarProduto = (nome, preco, qtd) => {

    if(nome.trim() === ""){
        return console.log("O nome não pode estar vazio.")
    }

    if(preco <= 0){
        return console.log("O preço deve ser um valor maior que zero.")
    }

    if(!Number.isInteger(qtd) || qtd < 0){
        return console.log("A quantidade deve ser um número inteiro maior ou igual a zero.")
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


cadastrarProduto("teclado", 20, 3)
cadastrarProduto("mouse", 0, 3)
cadastrarProduto("monitor", 10, 0)
console.log(produtos)
