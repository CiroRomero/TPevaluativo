import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    SobreNosotrosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    SobreNosotrosComponent,
    ContactoComponent
  ],
  exports: [
    SobreNosotrosComponent,
    ContactoComponent
  ]
})
export class NosotrosModule { }
