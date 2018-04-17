class Carro {
  private modelo: string
  private numeroDePortas: number
  private velocidade: number = 0

  constructor(modelo: string, numeroDePortas: number) {
    this.modelo = modelo
    this.numeroDePortas = numeroDePortas
  }

  public acelerar(): void {
    this.velocidade = this.velocidade + 10
  }
  
  public parar(): void {
    this.velocidade = 0
  }

  public velocidadeAtual(): number {
    return this.velocidade
  }
}

class Concessionaria {
  private endereco: string
  private listaDeCarros: Carro[]

  constructor(endereco: string, listaDeCarros: Carro[]) {
    this.endereco = endereco
    this.listaDeCarros = listaDeCarros
  }  

  public fornecedores(): string {
    return this.endereco
  }

  public mostrarListaDeCarros(): Carro[] {
    return this.listaDeCarros
  }
}

class Pessoa {
  private nome: string
  private carroPreferido: string
  private carro: any

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome
    this.carroPreferido = carroPreferido
  }

  public dizerNome(): string {
    return this.nome
  }
  
  public dizerCarroPreferido(): string {
    return this.carroPreferido
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro
  }

  public dizerCarroQueTem(): Carro {
    return this.carro
  }
}

/* Criar carros */
let carroA = new Carro('fusca', 2)
let carroB = new Carro('gol', 4)
let carroC = new Carro('bwm', 4)

/* Monstar a lista de carros da concessionaria */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. Norte', listaDeCarros)

/* Exibir a lista de carros */
// console.log(concessionaria.mostrarListaDeCarros())

/* Comprar o carro */
let cliente = new Pessoa('Joao', 'fusca')

console.log(cliente.dizerCarroQueTem())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if(carro['modelo'] == cliente.dizerCarroPreferido())

  // Se tiver, comprar o carro
  cliente.comprarCarro(carro)
  
})

console.log(cliente.dizerCarroQueTem())