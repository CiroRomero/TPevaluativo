//EN ESTE MODULO DE RUTAS SE ENCUENTRA LAS RUTAS RELACIONADAS DIRECTAMENTE CON EL NAVBAR 

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';
import { ContactoComponent } from './modules/nosotros/contacto/contacto.component';
import { SobreNosotrosComponent } from './modules/nosotros/sobre-nosotros/sobre-nosotros.component';
import { RegistroComponent } from './modules/autentificacion/pages/registro/registro.component';
const routes: Routes = [
    // Ruta común -> 1 solo componente
    {
      path:"",component:InicioComponent
    },
    {
      path:"contacto",component:ContactoComponent
    },
    {
      path:"sobrenosotros",component:SobreNosotrosComponent
    },
    {
      path:"registro",component:RegistroComponent
    },
    // Carga perezosa -> 1 módulo
    // loadChildren: indica una ruta hija
    // ()=>import: ruta de dónde viene el módulo
    // .then: promesa/ función asincronica
   
    {
      path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
    },
    {
      path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
    },
    {
      path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
    },
    {
      path:"",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)
    },
    {
      path:"",loadChildren:()=>import('./modules/carrito/carrito.module').then(m=>m.CarritoModule)
    },
    {
    path:"",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule),
    // Especificamos que la ruta de administrador va a ser protegida con un guardián
    // Y espera un rol de tipo "admin"
    canActivate: [ rutaProtegidaGuard ], data: { role: 'admin' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
