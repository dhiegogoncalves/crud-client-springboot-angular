import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosPrestadosRoutingModule } from './servicos-prestados-routing.module';
import { ServicosPrestadosFormComponent } from './servicos-prestados-form/servicos-prestados-form.component';
import { ServicosPrestadosListComponent } from './servicos-prestados-list/servicos-prestados-list.component';

@NgModule({
  declarations: [
    ServicosPrestadosFormComponent,
    ServicosPrestadosListComponent,
  ],
  imports: [CommonModule, ServicosPrestadosRoutingModule],
  exports: [ServicosPrestadosFormComponent, ServicosPrestadosListComponent],
})
export class ServicosPrestadosModule {}
