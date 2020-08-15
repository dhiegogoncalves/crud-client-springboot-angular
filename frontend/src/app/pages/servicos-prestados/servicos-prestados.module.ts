import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicosPrestadosRoutingModule } from './servicos-prestados-routing.module';
import { ServicosPrestadosFormComponent } from './servicos-prestados-form/servicos-prestados-form.component';
import { ServicosPrestadosListComponent } from './servicos-prestados-list/servicos-prestados-list.component';
import { ServicosPrestadosService } from './servicos-prestados.service';

@NgModule({
  declarations: [
    ServicosPrestadosFormComponent,
    ServicosPrestadosListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ServicosPrestadosRoutingModule,
  ],
  exports: [ServicosPrestadosFormComponent, ServicosPrestadosListComponent],
  providers: [ServicosPrestadosService],
})
export class ServicosPrestadosModule {}
