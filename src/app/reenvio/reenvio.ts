import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  imports: [FormsModule],
  selector: 'app-reenvio',
  styleUrl: './reenvio.css',
  templateUrl: './reenvio.html',
})
export class Reenvio {
  usuario: Cliente = new Cliente();
  enviado = false;

  entrar(): void {
    this.enviado = true;
  }
}