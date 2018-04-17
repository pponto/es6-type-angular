"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { ConcessionariaDao } from './ConcessionariaDao'
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// import { PessoaDao } from './PessoaDao';
var Pessoa_1 = __importDefault(require("./Pessoa"));
// import { CarroDao } from './CarroDao';
var Carro_1 = __importDefault(require("./Carro"));
// import { MotoDao } from './MotoDao';
var Moto_1 = __importDefault(require("./Moto"));
var Dao_1 = require("./Dao");
// let dao: ConcessionariaDao = new ConcessionariaDao()
var concessionaria = new Concessionaria_1.default('', []);
// dao.inserir(concessionaria)
// let dao2: PessoaDao = new PessoaDao()
var pessoa = new Pessoa_1.default('', '');
// dao2.atualizar(pessoa)
// let dao3: CarroDao = new CarroDao()
var carro = new Carro_1.default('', 0);
// dao3.inserir(carro)
// let dao4: MotoDao = new MotoDao()
var moto = new Moto_1.default;
// dao4.atualizar(moto)
var dao = new Dao_1.Dao();
dao.inserir(concessionaria);
var dao2 = new Dao_1.Dao();
dao2.atualizar(pessoa);
var dao3 = new Dao_1.Dao();
dao3.remover(4);
var dao4 = new Dao_1.Dao();
dao4.selecionarTodos();
