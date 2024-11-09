import { Component } from '@angular/core';
import { CardsInicio } from 'src/app/models/cards-inicio';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component {

  public info: CardsInicio[];
 

  constructor(){
    this.info = [
      { 
        ruta: '/indumentaria',  /*Esta ruta te dirije al apartado que corresponde*/
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1454880-800-800?v=638633917330670000&width=800&height=800&aspect=true',
        nombre: 'Camiseta adidas Boca Juniors Alternativa 1 24/25',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
        precio: 99.999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 6 cuotas sin interés de',
        precioCuotas: 16666,
        lanzamiento: 'Llega Hoy'
      },
      { 
        ruta: '/card2',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1028168-800-800?v=638386088559500000&width=800&height=800&aspect=true',
        nombre: 'Camiseta adidas Inter Miami Titular 22/23 Messi De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
        precio: 59.499,
        descripcion: 'descripcion',
        cuotas: 'Hasta 12 cuotas sin interés de',
        precioCuotas: 5000,
        lanzamiento: 'Envío Gratis'
      },
      { 
        ruta: '/card3',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1488518-800-800?v=638651306455600000&width=800&height=800&aspect=true',
        nombre: 'Camiseta Nike FC Barcelona Atl 2 23/24 De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/828806-auto-100?width=auto&height=100&aspect=true',
        precio: 74.999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 6 cuotas sin interés de',
        precioCuotas: 12499,
        lanzamiento: 'Envío Gratis'
      },
      { 
        ruta: '/card4',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1330769-800-800?v=638558039289430000&width=800&height=800&aspect=true',
        nombre: 'Campera Puma Manchester City De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/847065-auto-100?width=auto&height=100&aspect=true',
        precio: 148.999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 12 cuotas sin interés de',
        precioCuotas: 16153,
        lanzamiento: 'Llega Hoy'
      },
      { 
        ruta: '/card5',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1550488-800-800?v=638657364423600000&width=800&height=800&aspect=true',
        nombre: 'Camiseta Alternativa River Plate 24/25 Versión Jugador adidas Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
        precio: 199.999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 6 cuotas sin interés de',
        precioCuotas: 33.333,
        lanzamiento: 'lanzamiento'
      },
      { 
        ruta: '/card6',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1432260-800-800?v=638605393708730000&width=800&height=800&aspect=true',
        nombre: 'Camiseta adidas Real Madrid Alternativa 2 24/25 De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/1489697-auto-100?width=auto&height=100&aspect=true',
        precio: 119.999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 12 cuotas sin interés de',
        precioCuotas: 9.999,
        lanzamiento: 'lanzamiento'
      },
      { 
        ruta: '/card7',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1353434-800-800?v=638575343278400000&width=800&height=800&aspect=true',
        nombre: 'Camiseta Puma AC Milan 24/25 De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/847065-auto-100?width=auto&height=100&aspect=true',
        precio: 94.999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 9 cuotas sin interés de',
        precioCuotas: 10.555,
        lanzamiento: 'Envío Gratis'
      },
      { 
        ruta: '/card8',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1463053-800-800?v=638636543223800000&width=800&height=800&aspect=true',
        nombre: 'Campera Puma Borussia Dortmund Prematch 24/25 De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/847065-auto-100?width=auto&height=100&aspect=true',
        precio: 114.999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 9 cuotas sin interés de',
        precioCuotas: 12.083,
        lanzamiento: 'lanzamiento'
      },
      { 
        ruta: '/card9',
        imagen: 'https://sporting.vtexassets.com/arquivos/ids/1463089-800-800?v=638636546456430000&width=800&height=800&aspect=true',
        nombre: 'Pantalón Puma Borussia Dortmund Prematch 24/25 De Hombre',
        logo: 'https://sportingio.vtexassets.com/arquivos/ids/847065-auto-100?width=auto&height=100&aspect=true',
        precio: 106.999,
        descripcion: 'descripcion',
        cuotas: 'Hasta 9 cuotas sin interés de',
        precioCuotas: 11.888,
        lanzamiento: 'lanzamiento'
      },
    ]
  }

  slideIndex = 0; // Índice del primer item visible
  itemsToShow = 3; // Cuántas tarjetas queremos mostrar a la vez

  moveSlide(step: number): void {
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
