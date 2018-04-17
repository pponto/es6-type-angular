import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

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