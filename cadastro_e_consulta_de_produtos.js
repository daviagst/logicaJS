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

cadastrarProduto("teclado", 20, 3)
cadastrarProduto("mouse", 0, 3)
cadastrarProduto("monitor", 10, 0)
console.log(produtos)