import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { ClientesModule } from './pages/clientes/clientes.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicosPrestadosModule } from './pages/servicos-prestados/servicos-prestados.module';
import { LoginComponent } from './pages/login/login.component';

import { AuthService } from './core/auth.service';
import { LoginService } from './pages/login/login.service';

import { TokenInterceptor } from './core/token.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicosPrestadosModule,
  ],
  providers: [
    AuthService,
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
