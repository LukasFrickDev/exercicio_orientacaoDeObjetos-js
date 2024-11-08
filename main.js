//Classe de Abstração

function CategoriaCorrida(categoria) {
    this.categoria = categoria;
}

//Classes herdeiras

function Veiculos(categoria, veiculo, qtdPessoas) {
    this.veiculo = veiculo;
    this.qtdPessoas = qtdPessoas;

    CategoriaCorrida.call(this, categoria)
}

function Carros(categoria, veiculo, qtdPessoas, tracao) {
    this.tracao = tracao;

    Veiculos.call(this, categoria, veiculo, qtdPessoas)
}

//Instancias de objetos

const formula = new Carros("Formula1", "Monoposto", 1, "4x2")
const rally = new Carros("Rally", "Convencional", 2, "4x4")
const moto = new Veiculos("MotoGP", "Moto", 1)

console.log(formula);
console.log(rally);
console.log(moto);


