import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Firestore para Angular
import { Contacto } from 'src/app/models/contacto'; // Modelo o interfaz de Contacto
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Disponible en toda la aplicación
})
export class ContactoService {

  private coleccionContactos = 'contactos'; // Nombre de la colección en Firestore

  constructor(private firestore: AngularFirestore) {}

  /**
   * Método para guardar un mensaje en Firestore.
   * @param mensaje Objeto del tipo Contacto.
   */
  agregarMensaje(mensaje: Contacto): Promise<void> {
    const id = this.firestore.createId(); // Genera un ID único para el documento
    return this.firestore.collection(this.coleccionContactos).doc(id).set(mensaje);
  }

  /**
   * Método para obtener todos los mensajes de Firestore.
   * @returns Observable con una lista de mensajes.
   */
  obtenerMensajes(): Observable<Contacto[]> {
    return this.firestore.collection<Contacto>(this.coleccionContactos).valueChanges();
  }
}
