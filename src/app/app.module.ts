import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment'; //Vincula a la BD con la App
import { AngularFireModule } from '@angular/fire/compat'; //Treabaja con las colecciones de informacion
import { AngularFireAuthModule } from '@angular/fire/compat/auth' ;//Trabaja con la autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage' ; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
