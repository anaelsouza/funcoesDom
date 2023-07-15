function presente (dinheiro, valor){
    if (dinheiro < valor){
        return 'nao vai para comprar...'
    } else{
        return 'voce realmente precisa fazer  essa compra?'
    }
}

let x = presente(100, 90)
console.log(x)
