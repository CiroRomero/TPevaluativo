import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Crear colección de productos del tipo producto -> lo definimos como un array -> Lo iniciamos vacio
  coleccionProductos: Producto[] = [];  //Almacena los productos obtenidos del servicio.

  // Variable para manejar el estado de Edición y Eliminación de productos
  modalVisibleProducto: boolean = false; //Controla la visibilidad del modal de edición/eliminación.

  // Variable va a tomar el producto que nosotros elijamos
  productoSeleccionado!: Producto;  //Guarda el producto que se selecciona para editar o eliminar.  <- recibe valores vacíos

  nombreImagen!: string; // Obtendrá el nombre de la imagen

  imagen!: string; // Obtendrá la ruta de la imagen

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({ //FormGroup: Agrupa varios FormControl. Representa todo el formulario.
    nombre: new FormControl('', Validators.required), //FormControl: Representa un campo individual del formulario.
    precio: new FormControl(0, Validators.required), //Se inicia en 0 xq es un numero
    descripcion: new FormControl('', Validators.required), //Validators.required: Validador que hace que el campo sea obligatorio.
    categoria: new FormControl('', Validators.required),
    // imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required)
  })

  constructor(public servicioCrud: CrudService) { }

//Al inicializar el componente, obtiene la lista de productos desde el servicio (BD) y los almacena en coleccionProductos.
  ngOnInit(): void { //ngOnInit. Va a iniciar
    // subscribe -> notifica constantemente los cambios actuales del sistema
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      // guarda la información recibida como un nuevo "producto" a la colección
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    // Verificamos si el formulario del producto es válido antes de proceder
    if (this.producto.valid) {
      // Creamos un nuevo objeto 'Producto' con los datos del formulario
      let nuevoProducto: Producto = {
        // El ID del producto no se incluye porque lo genera la base de datos automáticamente
        idProducto: '', //Se lo damos desde la BD
        nombre: this.producto.value.nombre!,          // Nombre del producto ingresado por el usuario
        descripcion: this.producto.value.descripcion!, // Descripción del producto
        precio: this.producto.value.precio!,          // Precio del producto
        categoria: this.producto.value.categoria!,    // Categoría del producto
        imagen: '',                                   // La imagen se establecerá después de subirla
        alt: this.producto.value.alt!,                // Texto alternativo para la imagen
        stock: this.producto.value.stock!             // Cantidad de stock disponible
      };
  
      // Subimos la imagen seleccionada a la carpeta 'productos' en el almacenamiento (BD)
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(resp => {
          // Una vez que la imagen está subida, obtenemos la URL pública de la imagen
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              // Asignamos la URL obtenida al campo 'imagen' del nuevo producto
              this.servicioCrud.crearProducto(nuevoProducto, url)
                .then(() => {
                  // Si todo salió bien, notificamos al usuario
                  alert("Ha agregado un nuevo producto con éxito :)");
                  
                  // Reseteamos el formulario para que quede listo para un nuevo ingreso
                  this.producto.reset();
                })
                .catch(error => {
                  // Si hubo un problema al crear el producto, mostramos un mensaje de error
                  alert("Hubo un problema al agregar un nuevo producto :(");
                  
                  // También reseteamos el formulario en caso de error
                  this.producto.reset();
                });
            })
        });
    }
  }
  

// Función para mostrar una alerta y preparar la eliminación del producto
mostrarBorrar(productoSeleccionado: Producto) {
  // Muestra el modal de confirmación para borrar el producto
  this.modalVisibleProducto = true;

  // Almacena los detalles del producto seleccionado en una variable para usarlos después
  this.productoSeleccionado = productoSeleccionado;
}

// Función para eliminar definitivamente el producto seleccionado
borrarProducto() {
  // Llama al servicio CRUD para eliminar el producto de la base de datos y la imagen del almacenamiento
  this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen)
    .then(respuesta => {
      // Notifica al usuario que la eliminación fue exitosa
      alert("El producto se ha eliminado correctamente.");
    })
    .catch(error => {
      // Si ocurre un error durante la eliminación, muestra un mensaje de error con detalles
      alert("No se ha podido eliminar el producto \n" + error);
    });
}







// Función para seleccionar el producto que se va a editar
mostrarEditar(productoSeleccionado: Producto) {
  // Guardamos el producto seleccionado en la variable productoSeleccionado
  this.productoSeleccionado = productoSeleccionado;

  // Enviamos los datos del producto seleccionado al formulario
  // El ID no se modifica ni se envía, solo se utiliza para identificar el producto en la base de datos
  this.producto.setValue({
    nombre: productoSeleccionado.nombre,
    precio: productoSeleccionado.precio,
    descripcion: productoSeleccionado.descripcion,
    categoria: productoSeleccionado.categoria,
    // imagen: productoSeleccionado.imagen, // No necesitamos modificar la imagen aquí
    alt: productoSeleccionado.alt,
    stock: productoSeleccionado.stock
  });
}

// Función para guardar los cambios realizados en el producto
editarProducto() {
  // Preparamos los datos del producto con los valores obtenidos del formulario
  let datos: Producto = {
    idProducto: this.productoSeleccionado.idProducto, // ID no se modifica, sigue siendo el mismo
    nombre: this.producto.value.nombre!, // Obtiene el nombre del formulario
    precio: this.producto.value.precio!, // Obtiene el precio del formulario
    descripcion: this.producto.value.descripcion!, // Obtiene la descripción del formulario
    categoria: this.producto.value.categoria!, // Obtiene la categoría del formulario
    // Imagen no se toma del formulario, se usa la existente
    imagen: this.productoSeleccionado.imagen,
    alt: this.producto.value.alt!, // Obtiene el atributo "alt" del formulario
    stock: this.producto.value.stock! // Obtiene el stock del formulario
  }

  // Verificamos si el usuario ha subido una nueva imagen
  if(this.imagen){
    // Si hay nueva imagen, la subimos al servicio y obtenemos la URL
    this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
      .then(resp => {
        // Obtenemos la URL de la imagen subida
        this.servicioCrud.obtenerUrlImagen(resp)
          .then(url => {
            // Actualizamos la URL de la imagen en los datos del formulario
            datos.imagen = url;

            // Llamamos a la función para actualizar el producto con los nuevos datos
            this.actualizarProducto(datos);

            // Limpiamos el formulario después de la edición
            this.producto.reset();
          })
          .catch(error => {
            // Si hay un error al subir la imagen, mostramos un mensaje de error
            alert ("Hubo un problema al subir la imagen :( \n" + error);

            // Limpiamos el formulario en caso de error
            this.producto.reset();
          })
      })
  } else {
    // Si no se ha subido una nueva imagen, simplemente actualizamos los datos sin modificar la imagen
    this.actualizarProducto(datos);
  }
}

// Función para actualizar los datos del producto en la base de datos
actualizarProducto(datos: Producto){
  this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto => {
      // Notificamos al usuario que el producto ha sido modificado con éxito
      alert("El producto fue modificado con éxito.");
    })
    .catch(error => {
      // Si ocurre un error al actualizar, mostramos un mensaje de error
      alert("Hubo un problema al modificar el producto.");
    })
}

// Función para cargar una imagen desde el input HTML
cargarImagen(event: any){
  // Obtenemos el archivo seleccionado en el input
  let archivo = event.target.files[0]; //Toma el primer valor del arreglo

  // Creamos un objeto FileReader para leer el archivo
  let reader = new FileReader();

  if (archivo != undefined){ //Verifica que el archivo exista
    // Leemos el archivo y lo convertimos en una URL de datos
    reader.readAsDataURL(archivo);

    // Definimos qué hacer cuando se haya cargado el archivo
    reader.onloadend = () => { //onloadend: Es un evento que se dispara cuando el FileReader ha terminado de leer
      let url = reader.result; //reader.result: Contiene el resultado de la lectura

      // Verificamos si la URL es válida
      if(url != null){ 
        // Asignamos el nombre del archivo a la variable nombreImagen
        this.nombreImagen = archivo.name;

        // Asignamos la URL de la imagen a la variable imagen
        this.imagen = url.toString();
      }
    }
  }
}
}