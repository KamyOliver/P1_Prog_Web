import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-cesta',
  imports: [CommonModule, RouterLink],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css',
})
export class Cesta implements OnInit {
  lista: ItemCesta[] = [];
  total: number = 0;
  compraFinalizada: boolean = false;
  totalPago: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const json = localStorage.getItem('cesta');

    if (json != null) {
      try {
        this.lista = JSON.parse(json);
      } catch {
        this.lista = [];
      }
    }

    this.calcularTotal();
  }

  aumentarQuantidade(item: ItemCesta): void {
    if (item.quantidade < item.produto.estoque) {
      item.quantidade++;
      this.calcularTotal();
    }
  }

  diminuirQuantidade(item: ItemCesta): void {
    if (item.quantidade > 1) {
      item.quantidade--;
      this.calcularTotal();
    }
  }

  remover(item: ItemCesta): void {
    const indice = this.lista.indexOf(item);

    if (indice >= 0) {
      this.lista.splice(indice, 1);
      this.calcularTotal();
    }
  }

  limparCesta(): void {
    this.lista = [];
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = 0;

    for (const item of this.lista) {
      let valorUnitario = item.produto.valor;

      if (
        item.produto.desconto &&
        item.produto.desconto > 0 &&
        item.produto.valorDesconto !== undefined
      ) {
        valorUnitario = item.produto.valorDesconto;
      }

      item.valorTotal = item.quantidade * valorUnitario;
      this.total += item.valorTotal;
    }

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cesta', JSON.stringify(this.lista));
    }
  }

  finalizarCompra(): void {
    if (this.lista.length === 0) {
      return;
    }

    // Guarda o valor total da compra efetuada
    this.totalPago = this.total;
    this.compraFinalizada = true;

    // Limpa os itens da memória e do localStorage
    this.lista = [];
    this.total = 0;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('cesta');
    }
  }

  novaCompra(): void {
    this.compraFinalizada = false;
  }
}