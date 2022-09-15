// Crie duas funcões que recebem como parâmetro um objeto.
// // 1. A primeira deve retornar o objeto, alterando as propriedades dele 
// para que fiquem em CAIXA ALTA.
// // 2. A segunda deve retornar os valores do objeto como texto corrido.

// // 3. Em seguida, crie uma funcão que recebe um objeto e um callback como 
// parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e 
// em seguida imprimir o valor retornado.

// // Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`,
//  e a funcão 1.
// // Repita o processo para a funcão 2



const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1
const caixaAlta = (propriedades) => {
    const array = []
    for (let i in propriedades) {
        array.push(i.toUpperCase())
    } return array
}
console.log(caixaAlta(objeto))

// 2 
const textoCorrido = (valores) => {
    const array = [valores.nome, valores.profissao, valores.username, valores.senha]
    const novoArray = array.join('')
    return novoArray
}
console.log(textoCorrido(objeto))

// 3 
const callC = (objeto, propriedades, valores) => {
    console.log(propriedades(objeto))
    console.log(valores(objeto))
}
callC(objeto, caixaAlta, textoCorrido)


