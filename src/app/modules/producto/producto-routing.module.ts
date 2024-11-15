import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTACIONES DEL MODULO PRODUCTO
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { BotinesComponent } from './pages/botines/botines.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { GeneralComponent } from './pages/general/general.component';

// Este módulo solo se encarga de las rutas relacionadas con productos
const routes: Routes = [
  { 
    path: 'indumentaria', component: IndumentariaComponent
  },
  { 
    path: 'botines', component: BotinesComponent
   },
  {
     path: 'accesorios', component: AccesoriosComponent
    },

  { 
    path: 'general', component: GeneralComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
