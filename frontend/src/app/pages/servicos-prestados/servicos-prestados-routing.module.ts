import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosPrestadosListComponent } from './servicos-prestados-list/servicos-prestados-list.component';
import { ServicosPrestadosFormComponent } from './servicos-prestados-form/servicos-prestados-form.component';

const routes: Routes = [
  {
    path: 'servicos-prestados-list',
    component: ServicosPrestadosListComponent,
  },
  {
    path: 'servicos-prestados-form/:id',
    component: ServicosPrestadosFormComponent,
  },
  {
    path: 'servicos-prestados-form',
    component: ServicosPrestadosFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosPrestadosRoutingModule {}
