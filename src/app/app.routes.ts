import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Cesta } from './cesta/cesta';
import { Detalhe } from './detalhe/detalhe';
import { Login } from './login/login';
import { Pedido } from './model/pedido';
import { Reenvio } from './reenvio/reenvio';
import { ResultadoBusca } from './resultado-busca/resultado-busca';
import { Vitrine } from './vitrine/vitrine';
import { Inicio } from './inicio/inicio';
import { Promocoes } from './promocoes/promocoes';

export const routes: Routes = [
  { path: 'inicio', component: Inicio },
  { path: 'cadastro', component: Cadastro },
  { path: 'cesta', component: Cesta },
  { path: 'detalhe', component: Detalhe },
  { path: 'login', component: Login },
  { path: 'pedido', component: Pedido },
  { path: 'reenvio', component: Reenvio },
  { path: 'resultado-busca', component: ResultadoBusca },
  { path: 'vitrine', component: Vitrine },
  { path: 'promocoes', component: Promocoes },
  { path: '', component: Inicio }
];
