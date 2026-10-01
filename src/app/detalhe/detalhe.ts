import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Produto } from '../model/produto';
import { Discos } from '../discos/discos';


@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {

  produto?: Produto;

  origem: string = 'discos';


  constructor(private route: ActivatedRoute) {

    // Recebe o código do disco pela URL
    const codigo =
      this.route.snapshot.queryParamMap.get('codigo');


    // Recebe a página de onde o usuário veio
    this.origem =
      this.route.snapshot.queryParamMap.get('origem') ?? 'discos';


    // Procura o disco no catálogo completo
    this.produto =
      Discos.produtos.find(
        produto => produto.codigo === codigo
      );

  }


  // Define para qual página o botão VOLTAR deve levar
  get rotaVoltar(): string {

    if (this.origem === 'promocoes') {
      return '/promocoes';
    }

    return '/discos';

  }


  // Define o texto do botão VOLTAR
  get textoVoltar(): string {

    if (this.origem === 'promocoes') {
      return 'VOLTAR PARA PROMOÇÕES';
    }

    return 'VOLTAR PARA DISCOS';

  }

}