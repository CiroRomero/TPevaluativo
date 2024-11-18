import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-accesorios',
  templateUrl: './card-accesorios.component.html',
  styleUrls: ['./card-accesorios.component.css']
})
export class CardAccesoriosComponent {
// Colección de todos los productos
coleccionProductos: Producto[] = [];

// Colección de sólo productos de categoría "Juguetes"
coleccionAccesorios: Producto[] = [];

productoSeleccionado!: Producto;

modalVisible: boolean = false;

constructor(public servicioCrud: CrudService){}

ngOnInit(): void{
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;

    // mostrar la colección actual de juguetes
    this.mostrarProductoAccesorios();
  })
}

// Función para filtrar los productos que sean del tipo "juguetes"
mostrarProductoAccesorios(){
  // forEach: itera la colección
  this.coleccionProductos.forEach(producto => {
    // Si la categoría del producto es igual a "juguetes", se enviará a la 
    // colección de juguetes específicada

    if(producto.categoria === "Accesorios"){
      // .push: sube o agrega un item a una colección
      this.coleccionAccesorios.push(producto);
    }
  })
}

// Muestra información completa de un producto elegido por el usuario
mostrarVer(info: Producto){
  this.modalVisible = true;

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
