import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../../../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  urlApi = 'http://localhost:3000/clientes'
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlApi);
  }
}
