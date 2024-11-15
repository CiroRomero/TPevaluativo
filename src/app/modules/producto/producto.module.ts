import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
    IndumentariaComponent,
    BotinesComponent,
    AccesoriosComponent,
    GeneralComponent,
    CardAccesoriosComponent,
    CardBotinesComponent,
    CardGeneralComponent,
    CardIndumentariaComponent
    
    
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    AccesoriosComponent,
    BotinesComponent,
    GeneralComponent,
    IndumentariaComponent,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductoModule { }
