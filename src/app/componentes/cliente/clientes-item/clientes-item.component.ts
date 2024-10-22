import { Component, Input } from '@angular/core';
import { Cliente } from '../../../../../cliente';

@Component({
  selector: 'app-clientes-item',
  standalone: true,
  imports: [],
  templateUrl: './clientes-item.component.html',
  styleUrl: './clientes-item.component.css'
})
export class ClientesItemComponent {
  @Input() cliente!: Cliente;
}
