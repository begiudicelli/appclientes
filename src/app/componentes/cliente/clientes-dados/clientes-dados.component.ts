import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../servicos/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../../Cliente';
import { FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes-dados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './clientes-dados.component.html',
  styleUrl: './clientes-dados.component.css'
})
export class ClientesDadosComponent implements OnInit {
  cliente!: Cliente;
  clienteForm!: FormGroup;
  tipoOperacao: string = 'ALTERAR';

  constructor(private clienteService: ClienteService , 
    private activatedRoute: ActivatedRoute, private rota: Router){}

  ngOnInit(): void {
      this.clienteService.getClienteById( this.activatedRoute.snapshot.params['id'] ).subscribe( 
        dado => {
      this.cliente = dado;
      console.log(dado);
   });
  }

  submit (){
    if (this.tipoOperacao == 'INCLUIR'){
      const novoCliente = this.cliente; // criar uma cópia do objeto cliente 
      delete novoCliente.id; // deletar a propriedade id da cópia do objeto cliente, pq na inclusão o JSON Server é quem vai gerar um id para o novo cliente
      this.clienteService.incluirCliente(novoCliente).subscribe();
      this.tipoOperacao = 'ALTERAR';
      alert('Dados do Novo Cliente salvos com sucesso!')
      this.rota.navigate(['clientes']); // rotear de volta para o clientes-item-componente (lista de clientes)
    } else if (this.tipoOperacao == 'ALTERAR'){
      this.clienteService.alterarCliente(this.cliente).subscribe();
      alert('Dados alterados com sucesso!');
    }
  
  }

  novoCliente(){
    this.tipoOperacao = 'INCLUIR';
  }
  
  carregarFotoCliente(event: any){
    const foto = event.target.files[0];
    this.cliente.fotoCli = './/public/img/' + foto.name;
  }

  carregarFotoEmpresa(event: any){
    const foto = event.target.files[0];
    this.cliente.imagemEmp = './/public/img/' + foto.name;
  }

  excluirCliente(){
    this.fecharModal();
    this.clienteService.excluirCliente(this.cliente).subscribe();
    alert("Cliente Excluído !!")
    this.rota.navigate(['clientes']); // rotear de volta para o clientes-item-componente (lista de clientes)
  }
 
  abrirModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null){
      modalDiv.style.display = 'block'; // exibe o modal
    }
  }
  fecharModal(){
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null){
      modalDiv.style.display = 'none'; // fecha o modal
    }
  }
  
}
