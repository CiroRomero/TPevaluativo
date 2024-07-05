import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// IMPORTACIONES DE LAS VISTAS DEL MÓDULO PRODUCTO
import { Apartado1Component } from './pages/apartado-1/apartado-1.component';
import { Apartado2Component } from './pages/apartado-2/apartado-2.component';
import { Apartado3Component } from './pages/apartado-3/apartado-3.component';
import { Apartado4Component } from './pages/apartado-4/apartado-4.component';

const routes: Routes = [
  {
    path:"apartado-1",component:Apartado1Component
  },
  {
    path:"apartado-2",component:Apartado2Component
  },
  {
    path:"apartado-3",component:Apartado3Component
  },
  {
    path:"apartado-4",component:Apartado4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
