import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

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

  // ==========================================
  // ADICIONAR PRODUTO À CESTA
  // ==========================================

  comprar(produto: Produto): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let cesta: ItemCesta[] = [];
    const json = localStorage.getItem('cesta');

    if (json != null) {
      try {
        cesta = JSON.parse(json);
      } catch {
        cesta = [];
      }
    }

    const itemExistente = cesta.find(
      item => item.produto.codigo === produto.codigo
    );

    const valorUnitario = (produto.desconto && produto.desconto > 0 && produto.valorDesconto !== undefined)
      ? produto.valorDesconto
      : produto.valor;

    if (itemExistente) {
      if (itemExistente.quantidade < produto.estoque) {
        itemExistente.quantidade++;
        itemExistente.valorTotal = itemExistente.quantidade * valorUnitario;
      }
    } else {
      const novoItem = new ItemCesta();
      novoItem.produto = produto;
      novoItem.quantidade = 1;
      novoItem.valorTotal = valorUnitario;

      cesta.push(novoItem);
    }

    localStorage.setItem('cesta', JSON.stringify(cesta));

    // Redireciona para a tela da cesta
    this.router.navigate(['/cesta']);
  }

}