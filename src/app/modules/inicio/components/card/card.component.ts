import { Component } from '@angular/core';
import { Tienda } from 'src/app/models/tienda';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Tienda[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "CAMISETA TERCER UNIFORME BOCA JUNIORS 23/24 HEAT.RDY",
        precio: "$74.999",
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2608eed0de794450a50f07a7812eab8f_9366/Camiseta_Tercer_Uniforme_Boca_Juniors_23-24_HEAT.RDY_Azul_HT9917_01_laydown.jpg",
        descripcion: "UNA CAMISETA DE BOCA JUNIORS ENFOCADA EN LOS HINCHAS, HECHA CON MATERIALES RECICLADOS.",
      
      },
      {
        id: "",
        nombre: "BOTINES DE FÚTBOL COPA PURE II LEAGUE TERRENO FIRME",
        precio: "$114.999",
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea8e24819bef4d8d8fe6207adb1639ec_9366/Botines_de_Futbol_Copa_Pure_II_League_Terreno_Firme_Granate_IE7494.jpg",
        descripcion: "JUGÁ CON CLASE CON ESTOS BOTINES DE CUERO SINTÉTICO HECHOS PARCIALMENTE CON MATERIALES RECICLADOS.",
      },
      {
        id: "",
        nombre: "GUANTES DE ARQUERO PREDATOR PRO",
        precio: "$100.799",
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd7c5bf9f00b48aa8218af5d00cf4b63_9366/Guantes_de_Arquero_Predator_Pro_Negro_HN3345_21_model.jpg",
        descripcion: "UNOS GUANTES DE ARQUERO HECHOS CON UNA MEZCLA DE MATERIALES RECICLADOS Y RENOVABLES.",
      }
    ]
  }
}

