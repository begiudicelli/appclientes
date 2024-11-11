import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlAPI = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  getClientes() : Observable<Cliente[]> {
		return this.http.get<Cliente[]>(this.urlAPI);
	}

  getClienteById(id: string | number): Observable<Cliente> {
    return this.http.get<Cliente>( this.urlAPI + "/" + id);
 }
 
  alterarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.urlAPI + "/" + cliente.id, cliente);
  }

  incluirCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlAPI, cliente);
  }

  excluirCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.delete<Cliente>( this.urlAPI + "/" + cliente.id );
  }
 
}
