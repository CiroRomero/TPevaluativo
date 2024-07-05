import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { Apartado1Component } from './pages/apartado-1/apartado-1.component';
import { Apartado3Component } from './pages/apartado-3/apartado-3.component';
import { Apartado2Component } from './pages/apartado-2/apartado-2.component';
import { Apartado4Component } from './pages/apartado-4/apartado-4.component';


@NgModule({
  declarations: [
    Apartado1Component,
    Apartado3Component,
    Apartado2Component,
    Apartado4Component
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
