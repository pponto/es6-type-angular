import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ];

  constructor() {
  }

  // ngOnChanges sempre será disparado após o @Input ser chamado
  ngOnChanges() {

    // this.tentativas - gerenciada pela classe do componente painel
    // this.coracoes.length
    if (this.tentativas !== this.coracoes.length) { // 3 - 2 = 1 - 1 = 0
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }
  }

  ngOnInit() {

  }

}
