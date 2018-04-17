import { ConcessionariaInterface } from './ConcessionariaInterface'
import Carro from './Carro'

export default class Concessionaria implements ConcessionariaInterface {
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

  public fornecerHorariosDeFuncionamento(): string {
    return 'De segunda à sexta das 08:00 às 18:00 e sábado das 08:00 às 12:00'
  }
}
