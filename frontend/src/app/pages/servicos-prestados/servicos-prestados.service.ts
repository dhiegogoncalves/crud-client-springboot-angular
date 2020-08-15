import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ServicoPrestadoFormDTO } from './servicos-prestados-form/servico-prestado-form.dto';
import { ServicoPrestadoSearchDTO } from './servicos-prestados-list/servico-prestado-search';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicosPrestadosService {
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/api/servicos-prestados';
  }

  save(
    servicoPrestado: ServicoPrestadoFormDTO
  ): Observable<ServicoPrestadoFormDTO> {
    return this.httpClient.post<ServicoPrestadoFormDTO>(
      this.apiUrl,
      servicoPrestado
    );
  }

  getAllByNomeAndMes(
    nome: string,
    mes: string
  ): Observable<ServicoPrestadoSearchDTO[]> {
    return this.httpClient.get<ServicoPrestadoSearchDTO[]>(
      `${this.apiUrl}?nome=${nome}&mes=${mes}`
    );
  }
}
