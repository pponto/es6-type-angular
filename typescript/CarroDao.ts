import { DaoInterface } from './DaoInterface'
import Carro from './Carro'

export class CarroDao implements DaoInterface {
  nomeTabela: string = 'tb_carro'

  inserir(object: Carro): boolean {
    console.log('lógica de insert')
    return true
  }
  atualizar(object: Carro): boolean {
    console.log('lógica de update');
    return true
  }
  remover(id: number): Carro {
    console.log('lógica de delete')
    return new Carro('', 0)
  }
  selecionar(id: number): Carro {
    console.log('lógica de select')
    return new Carro('', 0)
  }
  selecionarTodos(): [any] {
    console.log('lógica de getALL')
    return [new Carro('', 0)]
  }
}