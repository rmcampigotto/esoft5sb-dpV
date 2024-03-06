const produtos = [
    {nome: "Caneta", tde: 20, valor: 2.50},
    {nome: "Impressora", tde: 2, valor: 850.99},
    {nome: "Mouse", tde: 15, valor: 67.00},
    {nome: "Headset", tde: 5, valor: 350},
    {nome: "Tenis", tde: 50, valor: 750.50},
    {nome: "Celular", tde: 10, valor: 1000.00}
]

// Criar novo array ue armazene 3 produtos de forma aleatória
//include - DICA

var produtos_random = []

while (produtos_random.length != 3) {
    let rand = produtos[Math.floor((Math.random() * produtos.length))]

    if(!produtos_random.includes(rand)){
        produtos_random.push(rand)
    }
}

console.log(produtos_random)

