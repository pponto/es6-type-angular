"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecedores = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return 'De segunda à sexta das 08:00 às 18:00 e sábado das 08:00 às 12:00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
