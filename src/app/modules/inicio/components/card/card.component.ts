import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Tienda } from 'src/app/models/tienda';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Tienda[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "CAMISETA TERCER UNIFORME BOCA JUNIORS 23/24 HEAT.RDY",
        precio:"$74.999" ,
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2608eed0de794450a50f07a7812eab8f_9366/Camiseta_Tercer_Uniforme_Boca_Juniors_23-24_HEAT.RDY_Azul_HT9917_01_laydown.jpg",
        descripcion: "UNA CAMISETA DE BOCA JUNIORS ENFOCADA EN LOS HINCHAS, HECHA CON MATERIALES RECICLADOS. Una conexión con su hogar. Los estampados dinámicos en el frente de esta camiseta oficial de Boca Juniors adidas de fútbol se inspira en las vigas de acero angulares del icónico puente transportador que se destaca en la vista de La Boca. Creada para un juego poderoso, esta camiseta incluye tecnología HEAT.RDY y detalles livianos. El famoso escudo del equipo le pone el toque final al look. Este producto, hecho con materiales 100% reciclados, representa solo una de nuestras soluciones para acabar con los residuos plásticos."
      },
      {
        id: "",
        nombre: "BOTINES DE FÚTBOL COPA PURE II LEAGUE TERRENO FIRME",
        precio: "$114.999",
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea8e24819bef4d8d8fe6207adb1639ec_9366/Botines_de_Futbol_Copa_Pure_II_League_Terreno_Firme_Granate_IE7494.jpg",
        descripcion: "JUGÁ CON CLASE CON ESTOS BOTINES DE CUERO SINTÉTICO HECHOS PARCIALMENTE CON MATERIALES RECICLADOS Para dominar un partido de verdad, debés mantener a tus compañeros de equipo y la pelota más cerca. Sentí la libertad de jugar con los cómodos y elegantes botines adidas Copa Pure II. Estos botines para jóvenes lucen detalles clásicos y un antepié en cuero sintético que los hacen icónicos y únicos. La suela para terreno firme permite controlar el partido en canchas de pasto natural seco. Este producto contiene al menos un 20% de material reciclado. Utilizando materiales reciclados reducimos los residuos, nuestra dependencia de los recursos finitos y la huella que generan los productos que fabricamos."
      },
      {
        id: "",
        nombre: "GUANTES DE ARQUERO PREDATOR PRO",
        precio: "$100.799",
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd7c5bf9f00b48aa8218af5d00cf4b63_9366/Guantes_de_Arquero_Predator_Pro_Negro_HN3345_21_model.jpg",
        descripcion: "UNOS GUANTES DE ARQUERO HECHOS CON UNA MEZCLA DE MATERIALES RECICLADOS Y RENOVABLES. Golpeá con precisión y controlá la pelota con estos guantes de arquero Predator de adidas sin tiras. Los detalles en silicona High Definition Grip en el dorso tejido ofrecen un ajuste preciso sin sacrificar la flexibilidad. La palma URG 2.0 incluye una envoltura para el pulgar que brinda un agarre extendido y una zona anti-roces para protegerte del desgaste que sucede entre los movimientos. Al menos un 50% de este producto está hecho de una mezcla de materiales reciclados y renovables."
      }
    ]
  }
}




/*

  //INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        id: "",
        nombre: "BICICLETA INDOOR RANDERS MAX FC-58H",
        tipo: "Bicicleta",
        imagen: "https://acdn.mitiendanube.com/stores/001/175/201/products/img_1-41-e6440816df346847ad16125189919184-320-0.webp",
        descripcion: "$1.099.009,10"
      },

      {
        id: "",
        nombre: "CINTA MOTORIZADA LÍNEA HOGAR RANDERS ARG-366",
        tipo: "Cinta De Correr",
        imagen: "https://acdn.mitiendanube.com/stores/001/175/201/products/arg-3661-a5e0e69284ea048aba16597176117130-1024-10241-e57d01d21b7b3bfcaf16603096808593-320-0.webp",
        descripcion: "$319.200"
      },

      {
        id: "",
        nombre: "BICICLETA DE SPINNING ATHLETIC 400BS",
        tipo: "Bicicleta",
        imagen: "https://acdn.mitiendanube.com/stores/001/175/201/products/400bs11-0460c5c1d2e811f9a316832945209048-320-0.webp",
        descripcion: "$340.480"
      },
    ]
  }

}
*/