function Produto(nome,preco,estoque){
    this.nome= nome
    this.preco = preco
    this.estoque

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque,
        //writable: true,
        configurable: true,
        get: function(){
            return estoque
        },
        set: function(val){
            if(typeof val != 'number'){
                throw new TypeError('deu ruim')
            }
            estoquePrivado = val
        }
    })
}

function criaProduto(){
    return {
        get nome(){
            return nome
        },
        set nome(val){
            val = val.replace('Shein', 'shopee')
            nome = val
        }
    }
}

/* let p1 = new Produto('Camiseta', 20, 3)
console.log(p1) 
p1.estoque = 'olaaaa'
console(p1.estoque) */

let p2 = criaProduto('Camisa')
p2.nome = 'Shein'
console.log(p2.nome)