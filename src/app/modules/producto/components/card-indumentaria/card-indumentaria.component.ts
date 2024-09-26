import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-indumentaria',
  templateUrl: './card-indumentaria.component.html',
  styleUrls: ['./card-indumentaria.component.css']
})
export class CardIndumentariaComponent {
// Colección de todos los productos
coleccionProductos: Producto[] = [];

// Colección de sólo productos de categoría "Indumentaria"
coleccionIndumentaria: Producto[] = [];

productoSeleccionado!: Producto;

modalVisible: boolean = false;

constructor(public servicioCrud: CrudService){}

ngOnInit(): void{
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;

    // mostrar la colección actual de Indumentaria
    this.mostrarProductoIndumentaria();
  })
}

// Función para filtrar los productos que sean del tipo "Indumentaria"
mostrarProductoIndumentaria(){
  // forEach: itera la colección
  this.coleccionProductos.forEach(producto => {
    // Si la categoría del producto es igual a "indumentaria", se enviará a la 
    // colección de juguetes específicada

    if(producto.categoria === "indumentaria"){
      // .push: sube o agrega un item a una colección
      this.coleccionIndumentaria.push(producto);
    }
  })
}

// Muestra información completa de un producto elegido por el usuario
mostrarVer(info: Producto){
  this.modalVisible = true;

  this.productoSeleccionado = info;
}

}
