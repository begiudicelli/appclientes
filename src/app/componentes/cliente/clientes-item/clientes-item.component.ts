import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { Cliente } from '../../../../../cliente';
=======
import { Cliente } from '../../../../Cliente';
import { RouterLink } from '@angular/router';
>>>>>>> 2974512 (updated v)

@Component({
  selector: 'app-clientes-item',
  standalone: true,
<<<<<<< HEAD
  imports: [],
=======
  imports: [RouterLink],
>>>>>>> 2974512 (updated v)
  templateUrl: './clientes-item.component.html',
  styleUrl: './clientes-item.component.css'
})
export class ClientesItemComponent {
  @Input() cliente!: Cliente;
<<<<<<< HEAD
=======

>>>>>>> 2974512 (updated v)
}
