import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';

@NgModule({
  declarations: [NavbarComponent, SiderbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, SiderbarComponent],
})
export class TemplateModule {}
