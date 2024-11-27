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

ngOnInit(): void {
  // Llama al servicio para obtener la lista de productos desde la base de datos
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    // Almacena los productos obtenidos en la variable local 'coleccionProductos'
    this.coleccionProductos = producto;

    // Llama a la función para filtrar y mostrar los productos de tipo accesorios
    this.mostrarProductoAccesorios();
  });
}


// Función para filtrar los productos que pertenezcan a la categoría "Accesorios"
mostrarProductoAccesorios() {
  // Itera sobre cada producto de la colección general
  this.coleccionProductos.forEach(producto => {
    // Verifica si la categoría del producto es "Accesorios"
    if (producto.categoria === "Accesorios") {
      // Agrega el producto a la colección específica de accesorios
      this.coleccionAccesorios.push(producto);
    }
  });
}


// Muestra información completa de un producto elegido por el usuario
mostrarVer(info: Producto){
  this.modalVisible = true;

  this.productoSeleccionado = info;
}



//ESTE NOOOOO
iniciarcarrito(){

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Hubo un error. Estamos trabajando para solucionarlo.",
  });
 }
}
