"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* Criar carros */
var carroA = new Carro_1.default('fusca', 2);
var carroB = new Carro_1.default('gol', 4);
var carroC = new Carro_1.default('bwm', 4);
/* Monstar a lista de carros da concessionaria */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av. Norte', listaDeCarros);
/* Exibir a lista de carros */
// console.log(concessionaria.mostrarListaDeCarros())
/* Comprar o carro */
var cliente = new Pessoa_1.default('Joao', 'fusca');
console.log(cliente.dizerCarroQueTem());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        // Se tiver, comprar o carro
        cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());
