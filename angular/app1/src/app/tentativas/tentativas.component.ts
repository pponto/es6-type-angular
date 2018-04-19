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
    console.log(this.coracoes);
  }

  // ngOnChanges sempre será disparado após o @Input ser chamado
  ngOnChanges() {
    console.log('tentativas recebidas do painel: ', this.tentativas);
  }

  ngOnInit() {

  }

}
