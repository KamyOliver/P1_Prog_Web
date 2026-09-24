import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { Vitrine } from '../vitrine/vitrine';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {
  produto?: Produto;

  constructor(private route: ActivatedRoute) {
    const codigo = Number(this.route.snapshot.queryParamMap.get('codigo'));
    this.produto = Vitrine.produtos.find(p => p.codigo === codigo) ?? Vitrine.produtos[0];
  }
}
