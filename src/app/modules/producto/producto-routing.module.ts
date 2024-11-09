import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTACIONES DEL MODULO PRODUCTO
import { CardAccesoriosComponent } from './components/card-accesorios/card-accesorios.component';
import { CardBotinesComponent } from './components/card-botines/card-botines.component';
import { CardIndumentariaComponent } from './components/card-indumentaria/card-indumentaria.component';
import { CardGeneralComponent } from './components/card-general/card-general.component';

// Este módulo solo se encarga de las rutas relacionadas con productos
const routes: Routes = [
  { 
    path: 'indumentaria', component: CardIndumentariaComponent
  },
  { 
    path: 'botines', component: CardBotinesComponent
   },
  {
     path: 'accesorios', component: CardAccesoriosComponent
    },

  { 
    path: 'general', component: CardGeneralComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
