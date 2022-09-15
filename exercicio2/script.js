// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const numeros = [1,2,3,4,5,6,7,8]


// const triplos = numeros.map((tri) => {
// const novonumeros = tri * 3
// return novonumeros
// })
// console.log('Números normais: ' + numeros 
// + '        Números triplicados: ' + triplos)


// const metade = numeros.map((divididos) => {
//     const novonumeros = divididos / 2
//     return novonumeros
//     })
//     console.log('Números normais: ' + numeros 
// + '        Números divididos por 2: ' + metade)



// JEITO SIMPLIFICADO

let triplos = numeros.map(value => value * 3)

let metade = numeros.map(value => value / 2)

console.log('Números normais: ' + numeros + ' Números triplicados: ' + triplos)
console.log('Números normais: ' + numeros + ' Números divididos por 2: ' + metade)
