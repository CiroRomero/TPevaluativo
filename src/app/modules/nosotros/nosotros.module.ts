import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SobreNosotrosComponent,
    ContactoComponent  // Aquí declaramos el componente
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    FormsModule,  // Importamos FormsModule aquí
    ReactiveFormsModule
  ],
  exports: [
    SobreNosotrosComponent,
    ContactoComponent
  ]
})
export class NosotrosModule { }
