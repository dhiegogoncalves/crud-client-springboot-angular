import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosPrestadosListComponent } from './servicos-prestados-list/servicos-prestados-list.component';
import { ServicosPrestadosFormComponent } from './servicos-prestados-form/servicos-prestados-form.component';
import { LayoutComponent } from 'src/app/template/layout/layout.component';
import { AuthGuard } from 'src/app/core/auth.guard';

const routes: Routes = [
  {
    path: 'servicos-prestados',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: ServicosPrestadosListComponent,
      },
      {
        path: 'form',
        component: ServicosPrestadosFormComponent,
      },
      { path: '', redirectTo: '/servicos-prestados/list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosPrestadosRoutingModule {}
