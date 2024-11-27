import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
// Importaciones para el manejo de archivos y referencias de Storage
import { getDownloadURL, getStorage, ref, UploadResult, uploadString, deleteObject } from 'firebase/storage';

/*
  getDownloadURL -> Para obtener la URL de descarga de una imagen subida
  getStorage -> Para obtener la instancia de almacenamiento
  ref -> Para crear referencias a ubicaciones en el almacenamiento
  UploadResult -> Tipo que representa el resultado de una operación subida
  uploadString -> Para subir imágenes en formato de cadena (string)
  deleteObject -> Para eliminar un espacio en el almacenamiento
*/

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Definimos colección para los productos de la web del tipo Producto
  private productosCollection: AngularFirestoreCollection<Producto>

  // Definimos variable "respuesta" que podrá subir resultados
  private respuesta!: UploadResult;

  // Inicializamos servicio de Storage
  private storage = getStorage();

  constructor(private database: AngularFirestore) {
    // Referenciamos colección productos y será subida como "producto" a Firebase
    this.productosCollection = database.collection('producto');
  }

  // CREAR productos -> obtiene datos del formulario y url de la imagen
  crearProducto(producto: Producto, url: string){
    return new Promise(async (resolve, reject) => {
      try{
        // Creamos número identificativo para el producto en la base de datos
        const idProducto = this.database.createId();

        // Asignamos ID creado al atributo idProducto de la interfaz "Producto"
        producto.idProducto = idProducto;

        // Asignamos URL recibida del parámetro al atributo imagen de la interfaz Producto
        producto.imagen = url;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);
        //this.productosCollection.doc(idProducto): Se accede a la colección de productos en la base de datos y se selecciona el documento con el ID generado (idProducto).
        //.set(producto): Luego, se usa el método set para almacenar el objeto producto en la base de datos con el ID generado.

        resolve(resultado);
      }catch(error){
        reject(error);
      }
    })
  }




  // OBTENER productos
  obtenerProducto(){
    // snapshotChanges -> toma una captura del estado de los datos
    // pipe -> funciona como una tubería que retorna el nuevo arreglo de datos
    // map -> "mapea" o recorre esa nueva información
    // a -> resguarda la nueva información y la envía
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())));
  }




  // EDITAR productos
  modificarProducto(idProducto: string, nuevaData: Producto){
    // accedemos a la colección, buscamos por ID y actualizamos información
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
  }




  // ELIMINAR productos
  eliminarProducto(idProducto: string, imagenUrl: string){
    // idProducto: Se utiliza para localizar el documento del producto en la base de datos.
    //imagenUrl: Es la URL de la imagen del producto en la BD.
    return new Promise((resolve, reject) => {
      try{
        // Definimos referencia local de Storage en el bloque "try"
        const storage = getStorage(); //Donde esta guardada la imagen.

        // Definimos referencia local desde el almacenamiento de Storage
        const referenciaImagen = ref(storage, imagenUrl);

        // Eliminamos la imagen desde el almacenamiento
        deleteObject(referenciaImagen) //Este método elimina el archivo de imagen especificado
        .then((res) => {
          // Accedo a la colección, busco su ID y lo elimino
          const respuesta = this.productosCollection.doc(idProducto).delete();
          //Después de eliminar la imagen, se elimina el producto de la base de datos. 
          //Se localiza el documento del producto usando su idProducto y se elimina de la colección en Firestore.
          resolve(respuesta);
        })
        .catch(error => {
          reject("Error al eliminar la imagen: \n"+error);
        })
      }
      catch(error){
        reject(error);
      }
    })
  }





  // OBTENER url de las imágenes
  obtenerUrlImagen(respuesta: UploadResult){
    // Retorna URL obtnenida como REFERENCIA
    return getDownloadURL(respuesta.ref); //Genera la URL pública de la imagen y luego la devuelve.
  }

  /**
   * PARÁMETROS DEFINIDOS
   * @param {string} nombre <- nombre de la imagen
   * @param {any} imagen <- tipo de imágenes que se pueden subir (extension)
   * @param {string} ruta <- ruta de almacenamiento de las imágenes
   * @returns <- se retorna lo obtenido
  */

  // SUBIR imágenes con sus referencias
  async subirImagen(nombre: string, imagen: any, ruta: string){
    try{
      // Crear una referencia de imagen
      // accede a Storage (almacenamiento), ruta (carpeta) / nombre (nombreImagen)
      let referenciaImagen = ref(this.storage, ruta + '/' + nombre);

      // Utilizamos el método uploadString para subir la imagen a Firebase Storage
      // 'referenciaImagen' es la ubicación donde se almacenará la imagen en Firebase Storage.
      // 'imagen' es el contenido de la imagen en formato 'data_url', que es una cadena en base64 representando la imagen.
      // 'data_url' indica el tipo de contenido que estamos subiendo, es decir, una URL de datos.
      this.respuesta = await uploadString(referenciaImagen, imagen, 'data_url')
      .then(resp => {
        return resp;
      })

      return this.respuesta;
    }
    catch(error){
      console.log("Error: \n"+error);

      return this.respuesta;
    }
  }
}
