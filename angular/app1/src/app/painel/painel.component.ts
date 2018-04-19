import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    // console.log('this.response');
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr === this.resposta) {

      alert('A tradução está correta');

      // trocar a pergunta da rodada
      this.rodada++;

      // progresso da barra
      this.progresso = this.progresso + (100 / this.frases.length);

      // atualiza o objeto da rodada
      this.atualizaRodada();

    } else {

      // diminuir a variável tentativas
      this.tentativas--;

      if (this.tentativas === -1) {
        alert('Você perdeu todas as chances');
      }

    }
  }

  public atualizaRodada(): void {

    // define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];

    // limpar a resposta
    this.resposta = '';
  }

}
