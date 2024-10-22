import { Component, Input, OnInit } from '@angular/core';
import { ClientesItemComponent } from '../clientes-item/clientes-item.component';
import { Cliente } from '../../../../../cliente';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../servicos/cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [ClientesItemComponent, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit{ 

  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService){}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe( (dado) => {
        this.clientes = dado;
        console.log(this.clientes);
     });
  }
}
