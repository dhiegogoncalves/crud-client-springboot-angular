import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { LayoutComponent } from 'src/app/template/layout/layout.component';
import { AuthGuard } from 'src/app/core/auth.guard';

const routes: Routes = [
  {
    path: 'clientes',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: ClientesListComponent },
      { path: 'form/:id', component: ClientesFormComponent },
      { path: 'form', component: ClientesFormComponent },
      { path: '', redirectTo: '/clientes/list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
