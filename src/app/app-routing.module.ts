import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

// Son las encargadas de tener todas las rutas de la página
const routes: Routes = [

  //es una ruta comun que te lleva a un componente
  {path:"",component:InicioComponent},
  //carga perezosa = ruta que te lleva a un modulo especifico
  //loadChildren inidica que habra una ruta fija
  //()=>import funcion flecha que importa desde la ruta 
  //.then funcion asincronica del tipo PROMESA
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
