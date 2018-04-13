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

let carroA = new Carro('Gol', 4)
console.log(carroA)
carroA.acelerar()
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
console.log(carroA)
carroA.velocidadeAtual()
console.log(carroA)
carroA.parar()
console.log(carroA)