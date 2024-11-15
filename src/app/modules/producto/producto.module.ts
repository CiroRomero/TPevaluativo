import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './producto-routing.module';

//VISTAS

//COMPONENTES LOCALES
import { CardIndumentariaComponent } from './components/card-indumentaria/card-indumentaria.component';
import { CardBotinesComponent } from './components/card-botines/card-botines.component';
import { CardAccesoriosComponent } from './components/card-accesorios/card-accesorios.component';
import { CardGeneralComponent } from './components/card-general/card-general.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { BotinesComponent } from './pages/botines/botines.component';
import { GeneralComponent } from './pages/general/general.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';


@NgModule({
  declarations: [
    CardIndumentariaComponent,
    CardBotinesComponent,
    CardAccesoriosComponent,
    CardGeneralComponent,
    AccesoriosComponent,
    BotinesComponent,
    GeneralComponent,
    IndumentariaComponent,
    
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],

  exports: [
    
  ]
})
export class ProductoModule { }
