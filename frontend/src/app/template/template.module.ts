import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [NavbarComponent, SiderbarComponent, LayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SiderbarComponent, LayoutComponent],
})
export class TemplateModule {}
