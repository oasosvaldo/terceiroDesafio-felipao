class hero {
    constructor(nome, idade, tipo, poder) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.poder = poder
    }
    atack() {
        console.log(`O ${this.tipo} ${this.nome} usou ${this.poder}`)
    }
}

let mago = new hero("Geralt de Rivia", "29", "mago", "magia")
let guerreio = new hero("Zangief", "28", "guerreiro", "espada")
let monge = new hero("Raiden", "33", "monge", "artes marciais")
let ninja = new hero("Subi Zero", "43", "ninja", "shuriken")

mago.atack()
guerreio.atack()
monge.atack()
ninja.atack()