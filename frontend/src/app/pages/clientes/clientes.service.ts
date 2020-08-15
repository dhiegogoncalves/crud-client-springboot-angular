import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ClienteDTO } from './cliente.dto';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/api/clientes';
  }

  save(cliente: ClienteDTO): Observable<ClienteDTO> {
    return this.httpClient.post<ClienteDTO>(this.apiUrl, cliente);
  }

  update(cliente: ClienteDTO): Observable<any> {
    return this.httpClient.put<ClienteDTO>(
      `${this.apiUrl}/${cliente.id}`,
      cliente
    );
  }

  getAllClientes(): Observable<ClienteDTO[]> {
    return this.httpClient.get<ClienteDTO[]>(this.apiUrl);
  }

  getClienteById(id: number): Observable<ClienteDTO> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  delete(cliente: ClienteDTO): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${cliente.id}`);
  }
}
