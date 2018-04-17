// import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
// import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa';
// import { CarroDao } from './CarroDao';
import Carro from './Carro';
// import { MotoDao } from './MotoDao';
import Moto from './Moto';
import { Dao } from './Dao';

// let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])

// dao.inserir(concessionaria)

// let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '')

// dao2.atualizar(pessoa)

// let dao3: CarroDao = new CarroDao()
let carro: Carro = new Carro('', 0)

// dao3.inserir(carro)

// let dao4: MotoDao = new MotoDao()
let moto: Moto = new Moto
// dao4.atualizar(moto)

let dao: Dao<Concessionaria> = new Dao<Concessionaria>()
dao.inserir(concessionaria)

let dao2: Dao<Pessoa> = new Dao<Pessoa>()
dao2.atualizar(pessoa)

let dao3: Dao<Carro> = new Dao<Carro>()
dao3.remover(4)

let dao4: Dao<Moto> = new Dao<Moto>()
dao4.selecionarTodos()