import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelperService: JwtHelperService;

  constructor() {
    this.jwtHelperService = new JwtHelperService();
  }

  getToken(): string {
    return sessionStorage.getItem('@app/accessToken');
  }

  getUserName(): string {
    const token = this.getToken();

    if (token) {
      return this.jwtHelperService.decodeToken(token).user_name;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    if (token) {
      const expired = this.jwtHelperService.isTokenExpired(token);
      return !expired;
    }

    return false;
  }

  logout(): void {
    sessionStorage.removeItem('@app/accessToken');
  }
}
