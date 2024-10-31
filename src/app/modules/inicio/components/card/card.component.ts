import { Component } from '@angular/core';
import { CardsInicio } from 'src/app/models/cards-inicio';
/*import { RutaInicio } from 'src/app/models/ruta-inicio';*/

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  /*public info: RutaInicio[];*/
  public info: CardsInicio[];

    constructor(){
      this.info = [
        { 
          ruta: '/indumentaria',  /*Esta ruta te dirije al apartado que corresponde*/
          imagen: 'https://sporting.vtexassets.com/arquivos/ids/1454880-800-800?v=638633917330670000&width=800&height=800&aspect=true',
          nombre: 'Camiseta adidas Boca Juniors Alternativa 1 24/25',
          logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
          precio: 99.999,
          descripcion: 'Camiseta adidas Boca Juniors Alternativa 1 24/25 De Hombre',
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
          descripcion: 'Camiseta adidas Inter Miami Titular 22/23 Messi De Hombre',
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
          descripcion: 'Camiseta Nike FC Barcelona Atl 2 23/24 De Hombre',
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
          descripcion: 'Campera Puma Manchester City De Hombre',
          cuotas: 'Hasta 12 cuotas sin interés de',
          precioCuotas: 16153,
          lanzamiento: 'lanzamiento'
        }, 
      ]
    }
  }





    /*
  constructor() {
    this.info = [
      {
        id: "", // Asigna un ID único
        nombre: "Indumentaria",
        ruta: "/indumentaria",
        imagen: "https://i.pinimg.com/originals/83/bc/c5/83bcc5cbb57b9b6d20ed6eadf48686d6.jpg",
        carruselCards: [
          { 
            ruta: '/indumentaria',
            imagen: 'https://sporting.vtexassets.com/arquivos/ids/1454880-800-800?v=638633917330670000&width=800&height=800&aspect=true',
            nombre: 'Camiseta adidas Boca Juniors Alternativa 1 24/25',
            logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
            precio: 99999,
            descripcion: 'Camiseta adidas Boca Juniors Alternativa 1 24/25 De Hombre',
            cuotas: 'Hasta 6 cuotas sin interés de',
            precioCuotas: 16666,
            lanzamiento: 'LANZAMIENTO'
          },
          { 
            ruta: '/card2',
            imagen: 'https://sporting.vtexassets.com/arquivos/ids/1028168-800-800?v=638386088559500000&width=800&height=800&aspect=true',
            nombre: 'Camiseta adidas Boca Juniors Alternativa 1 24/25',
            logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
            precio: 99999,
            descripcion: 'Camiseta adidas Boca Juniors Alternativa 1 24/25 De Hombre',
            cuotas: 'Hasta 6 cuotas sin interés de',
            precioCuotas: 16666,
            lanzamiento: 'LANZAMIENTO'
          },
          { 
            ruta: '/card3',
            imagen: 'https://sporting.vtexassets.com/arquivos/ids/1455208-800-800?v=638633945210100000&width=800&height=800&aspect=true',
            nombre: 'Camiseta adidas Boca Juniors Alternativa 1 24/25',
            logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
            precio: 99999,
            descripcion: 'Camiseta adidas Boca Juniors Alternativa 1 24/25 De Hombre',
            cuotas: 'Hasta 6 cuotas sin interés de',
            precioCuotas: 16666,
            lanzamiento: 'LANZAMIENTO'
          },
          { 
            ruta: '/card4',
            imagen: 'https://sporting.vtexassets.com/arquivos/ids/1454880-800-800?v=638633917330670000&width=800&height=800&aspect=true',
            nombre: 'Camiseta adidas Boca Juniors Alternativa 1 24/25',
            logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
            precio: 99999,
            descripcion: 'Camiseta adidas Boca Juniors Alternativa 1 24/25 De Hombre',
            cuotas: 'Hasta 6 cuotas sin interés de',
            precioCuotas: 16666,
            lanzamiento: 'LANZAMIENTO'
          },
          { 
            ruta: '/indumentaria',
            imagen: 'https://sporting.vtexassets.com/arquivos/ids/1028168-800-800?v=638386088559500000&width=800&height=800&aspect=true',
            nombre: 'Camiseta adidas Boca Juniors Alternativa 1 24/25',
            logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
            precio: 99999,
            descripcion: 'Camiseta adidas Boca Juniors Alternativa 1 24/25 De Hombre',
            cuotas: 'Hasta 6 cuotas sin interés de',
            precioCuotas: 16666,
            lanzamiento: 'LANZAMIENTO'
          },
          { 
            ruta: '/card6',
            imagen: 'https://sporting.vtexassets.com/arquivos/ids/1455208-800-800?v=638633945210100000&width=800&height=800&aspect=true',
            nombre: 'Camiseta adidas Boca Juniors Alternativa 1 24/25',
            logo: 'https://sportingio.vtexassets.com/arquivos/ids/837826-auto-125?width=auto&height=125&aspect=true',
            precio: 99999,
            descripcion: 'Camiseta adidas Boca Juniors Alternativa 1 24/25 De Hombre',
            cuotas: 'Hasta 6 cuotas sin interés de',
            precioCuotas: 16666,
            lanzamiento: 'LANZAMIENTO'
          },    
        ]
      },
    ];
  }

  // Método para dividir las tarjetas en grupos
  chunk(array: any[], size: number): any[] {
    const result: any[] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  } 
}
  */
 /*         { 
            ruta: "/card2", 
            imagen: "https://sporting.vtexassets.com/arquivos/ids/1454880-800-800?v=638633917330670000&width=800&height=800&aspect=true" 
            nombre: "Card 2", 
            logo: "",
            precio: "",
            descripcion: "",
            cuotas: "",
            precioCuotas: "",
            Lanzamiento: ""
          },
          { 
           
            ruta: "/card3", 
            imagen: "https://sporting.vtexassets.com/arquivos/ids/952734-800-800?v=638325386672400000&width=800&height=800&aspect=true" 
            nombre: "Card 3", 
            logo: "",
            precio: "",
            descripcion: "",
            cuotas: "",
            precioCuotas: "",
            Lanzamiento: ""
          },
          { 
           
           ruta: "/card4", 
           imagen: "https://sporting.vtexassets.com/arquivos/ids/1330769-800-800?v=638558039289430000&width=800&height=800&aspect=true" 
           nombre: "Card 4", 
            logo: "",
            precio: "",
            descripcion: "",
            cuotas: "",
            precioCuotas: "",
            Lanzamiento: ""
          },
          {
             ruta: "/card5", 
             imagen: "https://sporting.vtexassets.com/arquivos/ids/1028605-800-800?v=638386692711800000&width=800&height=800&aspect=true" 
             nombre: "Card 5", 
              logo: "",
              precio: "",
              descripcion: "",
              cuotas: "",
              precioCuotas: "",
              Lanzamiento: "" 
          }
*/          



