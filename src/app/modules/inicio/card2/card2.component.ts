import { Component } from '@angular/core';
import { CardsInicio } from 'src/app/models/cards-inicio';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {

  public info: CardsInicio[];
 

  constructor(){
    this.info = [
      { 
        ruta: '/indumentaria',  /*Esta ruta te dirije al apartado que corresponde*/
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1079077-800-800?v=638449062528600000&width=800&height=800&aspect=true',
        nombre: 'Botines Puma Future 7 Play FG/AG De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/847065-auto-100?width=auto&height=100&aspect=true',
        precio: 60000,
        descripcion: 'descripcion',
        cuotas: 'Hasta 3 cuotas sin interés de',
        precioCuotas: 20000,
        lanzamiento: 'Llega Hoy'
      },
      { 
        ruta: '/card2',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/505025-800-800?v=637852721364500000&width=800&height=800&aspect=true',
        nombre: 'Botines adidas Predator Edge .3 Fg De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
        precio: 99000,
        descripcion: 'descripcion',
        cuotas: 'Hasta 6 cuotas sin interés de',
        precioCuotas: 16000.65,
        lanzamiento: 'Llega Hoy'
      },
      { 
        ruta: '/card3',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1492369-800-800?v=638652109699770000&width=800&height=800&aspect=true',
        nombre: 'Botines Nike Zoom Mercurial Superfly 9 Elite XXV Fg Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/828806-auto-100?width=auto&height=100&aspect=true',
        precio: 459999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 12 cuotas sin interés de',
        precioCuotas: 38333.25,
        lanzamiento: 'Lanzamiento'
      },
      { 
        ruta: '/card4',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1452247-800-800?v=638629541249700000&width=800&height=800&aspect=true',
        nombre: 'Botines adidas X Crazyfast Club .4 TF De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
        precio: 104999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 9 cuotas sin interés de',
        precioCuotas: 6666.66,
        lanzamiento: 'Poco Stok'
      },
      { 
        ruta: '/card5',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1470322-800-800?v=638645154264800000&width=800&height=800&aspect=true',
        nombre: 'Botines Nike Zoom Vapor 15 Elite FG De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/828806-auto-100?width=auto&height=100&aspect=true',
        precio: 419999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 12 cuotas sin interés de',
        precioCuotas: 34999.91,
        lanzamiento: 'Lanzamiento'
      },
      { 
        ruta: '/card6',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1432260-800-800?v=638605393708730000&width=800&height=800&aspect=true',
        nombre: 'Botines adidas Predator League IC De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/1489697-auto-100?width=auto&height=100&aspect=true',
        precio: 149999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 12 cuotas sin interés de',
        precioCuotas: 124999.91,
        lanzamiento: 'Envío Gratis'
      },
      { 
        ruta: '/card7',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1071205-800-800?v=638441309003570000&width=800&height=800&aspect=true',
        nombre: 'Botines Puma Future 7 Pro FG/AG De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/847065-auto-100?width=auto&height=100&aspect=true',
        precio: 131999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 9 cuotas sin interés de',
        precioCuotas: 14999.91,
        lanzamiento: 'Envío Gratis'
      },
    ]
  }

  slideIndex = 0; // Índice del primer item visible
  itemsToShow = 3; // Cuántas tarjetas queremos mostrar a la vez

  moveSlide2(step: number): void {
    const totalSlides = this.info.length;
    this.slideIndex += step;

    // Si llegamos al final, volvemos al principio
    if (this.slideIndex >= totalSlides) {
      this.slideIndex = 0;
    } else if (this.slideIndex < 0) {
      this.slideIndex = totalSlides - 1;
    }

    const newTransform = `-${this.slideIndex * (100 / this.itemsToShow)}%`;
    const carrusel = document.querySelector('.carrusel') as HTMLElement;
    if (carrusel) {
      carrusel.style.transform = `translateX(${newTransform})`;
    }
  }

}
