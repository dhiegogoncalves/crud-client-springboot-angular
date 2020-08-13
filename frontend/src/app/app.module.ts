import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { ClientesModule } from './pages/clientes/clientes.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicosPrestadosModule } from './pages/servicos-prestados/servicos-prestados.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicosPrestadosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
