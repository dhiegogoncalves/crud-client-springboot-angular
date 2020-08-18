import { LoginService } from './login.service';
import { UsuarioDTO } from './usuario.dto';
import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuarioDTO: UsuarioDTO;

  successMessage: string;
  errors: string[];
  isNewUser: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    this.usuarioDTO = new UsuarioDTO();
  }

  onSubmit(): void {
    this.loginService.getToken(this.usuarioDTO).subscribe(
      (tokenDTO) => {
        sessionStorage.setItem('@app/accessToken', tokenDTO.access_token);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errors = ['Usuário e/ou senha incorreto(s).'];
      }
    );
  }

  prepareRegistration(event): void {
    event.preventDefault();
    this.isNewUser = true;
    this.usuarioDTO = new UsuarioDTO();
    this.errors = [];
  }

  register(): void {
    this.successMessage = null;
    this.errors = [];

    this.loginService.save(this.usuarioDTO).subscribe(
      () => {
        this.successMessage = 'Cadastro realizado com sucesso! Efetue o login.';
        this.usuarioDTO = new UsuarioDTO();
        this.isNewUser = false;
      },
      (error) => (this.errors = error.error.errors)
    );
  }

  cancelRegistration(): void {
    this.isNewUser = false;
    this.usuarioDTO = new UsuarioDTO();
    this.successMessage = null;
    this.errors = [];
  }
}
