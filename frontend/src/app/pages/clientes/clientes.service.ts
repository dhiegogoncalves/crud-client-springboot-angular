import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  apiUrl: string = environment.apiUrl + '/api/clientes';

  constructor(private http: HttpClient) {}

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}`, cliente);
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente);
  }

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  delete(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${cliente.id}`);
  }
}
