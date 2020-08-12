import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';

@NgModule({
  declarations: [NavbarComponent, SiderbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SiderbarComponent],
})
export class TemplateModule {}
