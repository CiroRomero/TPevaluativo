import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-general',
  templateUrl: './card-general.component.html',
  styleUrls: ['./card-general.component.css']
})
export class CardGeneralComponent {
 // Definimos colección local de productos
 coleccionProductos: Producto[] = [];

 // Variable local para obtener producto seleccionado
 productoSeleccionado!: Producto;

 // Variable para manejar estado de un modal
 modalVisible: boolean = false;

 constructor(public servicioCrud: CrudService){}
 
 ngOnInit(): void{
   this.servicioCrud.obtenerProducto().subscribe(producto => {
     this.coleccionProductos = producto;
   })
 }

 // Función para modal que muestre la información de un producto en específico
 mostrarVer(info: Producto){
   // Habilita visibilidad del modal
   this.modalVisible = true;

   // Guarda información de un producto elegido por el usuario
   this.productoSeleccionado = info;
 }

 iniciarcarrito(){

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Hubo un error. Estamos trabajando para solucionarlo.",
  });
 }

}
