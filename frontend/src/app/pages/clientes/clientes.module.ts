import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

import { ClientesService } from './clientes.service';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

@NgModule({
  declarations: [ClientesFormComponent, ClientesListComponent],
  imports: [CommonModule, FormsModule, ClientesRoutingModule],
  exports: [ClientesFormComponent, ClientesListComponent],
  providers: [ClientesService],
})
export class ClientesModule {}
