import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './producto-routing.module';

//VISTAS
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { BotinesComponent } from './pages/botines/botines.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { AfaArgentinaComponent } from './pages/afa-argentina/afa-argentina.component';
import { GeneralComponent } from './pages/general/general.component';

//COMPONENTES LOCALES
import { CardIndumentariaComponent } from './components/card-indumentaria/card-indumentaria.component';
import { CardBotinesComponent } from './components/card-botines/card-botines.component';
import { CardAccesoriosComponent } from './components/card-accesorios/card-accesorios.component';
import { CardAfaArgentinaComponent } from './components/card-afa-argentina/card-afa-argentina.component';
import { CardGeneralComponent } from './components/card-general/card-general.component';


@NgModule({
  declarations: [
    IndumentariaComponent,
    BotinesComponent,
    AccesoriosComponent,
    AfaArgentinaComponent,
    CardIndumentariaComponent,
    CardBotinesComponent,
    CardAccesoriosComponent,
    CardAfaArgentinaComponent,
    CardGeneralComponent,
    GeneralComponent
    
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],

  exports: [
    GeneralComponent,
    IndumentariaComponent,
    BotinesComponent,
    AccesoriosComponent,
    AfaArgentinaComponent
    
  ]
})
export class ProductoModule { }
