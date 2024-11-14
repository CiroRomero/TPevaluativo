import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    ContactoComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ContactoComponent
  ],
  exports: [
    ContactoComponent
  ]
})
export class ContactoModule { }
