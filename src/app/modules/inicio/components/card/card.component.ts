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
          { nombre: "Card 1", ruta: "/card1", imagen: "https://i.pinimg.com/originals/83/bc/c5/83bcc5cbb57b9b6d20ed6eadf48686d6.jpg" },
          { nombre: "Card 2", ruta: "/card2", imagen: "https://i.pinimg.com/originals/e3/7b/8b/e37b8bf52b029f4e9d6bbd907a0e5e4c.jpg" },
          { nombre: "Card 3", ruta: "/card3", imagen: "https://th-test-11.slatic.net/p/6e4cd8601a6e75f229adf69fdcd91a94.jpg" },
          { nombre: "Card 4", ruta: "/card4", imagen: "https://th-test-11.slatic.net/p/6e4cd8601a6e75f229adf69fdcd91a94.jpg" },
          { nombre: "Card 5", ruta: "/card5", imagen: "https://th-test-11.slatic.net/p/6e4cd8601a6e75f229adf69fdcd91a94.jpg" }
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
