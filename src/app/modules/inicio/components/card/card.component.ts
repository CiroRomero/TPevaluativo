import { Component } from '@angular/core';
import { RutaInicio } from 'src/app/models/ruta-inicio';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: RutaInicio[];

  constructor() {
    this.info = [
      {
        id: "1", // Asigna un ID único
        nombre: "Indumentaria",
        ruta: "/indumentaria",
        imagen: "https://i.pinimg.com/originals/83/bc/c5/83bcc5cbb57b9b6d20ed6eadf48686d6.jpg",
        carruselCards: [
          { 
            nombre: "Card 1", 
            ruta: "/card1", 
            imagen: "https://sporting.vtexassets.com/arquivos/ids/1117673-800-800?v=638460101366670000&width=800&height=800&aspect=true" 
          },
          { 
            nombre: "Card 2", 
            ruta: "/card2", 
            imagen: "https://sporting.vtexassets.com/arquivos/ids/1454880-800-800?v=638633917330670000&width=800&height=800&aspect=true" 
          },
          { 
            nombre: "Card 3", 
            ruta: "/card3", 
            imagen: "https://sporting.vtexassets.com/arquivos/ids/952734-800-800?v=638325386672400000&width=800&height=800&aspect=true" 
          },
          { 
            nombre: "Card 4", 
            ruta: "/card4", 
            imagen: "https://sporting.vtexassets.com/arquivos/ids/1330769-800-800?v=638558039289430000&width=800&height=800&aspect=true" 
          },
          {
             nombre: "Card 5", 
             ruta: "/card5", 
             imagen: "https://sporting.vtexassets.com/arquivos/ids/1028605-800-800?v=638386692711800000&width=800&height=800&aspect=true" 
            }
        ]
      },
      // Agrega los otros objetos siguiendo el mismo formato...
    ];
  }

  // Método para dividir las tarjetas en grupos
  chunk(array: any[], chunkSize: number) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
}
