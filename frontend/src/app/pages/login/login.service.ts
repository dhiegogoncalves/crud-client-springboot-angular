import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { UsuarioDTO } from './usuario.dto';
import { TokenDTO } from './token.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string;
  tokenUrl: string;
  clientId: string;
  clientSecret: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/api/usuarios';
    this.tokenUrl = environment.apiUrl + environment.tokenUrl;
    this.clientId = environment.clientId;
    this.clientSecret = environment.clientSecret;
  }

  save(usuarioDTO: UsuarioDTO): Observable<void> {
    return this.httpClient.post<void>(this.apiUrl, usuarioDTO);
  }

  getToken(usuarioDTO: UsuarioDTO): Observable<TokenDTO> {
    const params = new HttpParams()
      .set('username', usuarioDTO.username)
      .set('password', usuarioDTO.password)
      .set('grant_type', 'password');

    const headers = {
      Authorization: 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    return this.httpClient.post<TokenDTO>(this.tokenUrl, params.toString(), {
      headers,
    });
  }
}
