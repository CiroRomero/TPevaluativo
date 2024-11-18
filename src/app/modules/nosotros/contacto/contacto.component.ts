import { Component } from '@angular/core';
import { Contacto } from 'src/app/models/contacto'; // Importa el modelo de Contacto
import { ContactoService } from '../services/contacto.service';// Servicio para manejar Firestore
import Swal from 'sweetalert2'; // Para alertas personalizadas

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  // Modelo que representa los datos del formulario
  contacto: Contacto = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    fechaEnvio: ''
  };

  // Inyección del servicio de contacto
  constructor(private contactoService: ContactoService) {}

  /**
   * Método para enviar el mensaje a Firestore
   */
  async enviarMensaje() {
    try {
      // Añadimos la fecha actual al mensaje
      this.contacto.fechaEnvio = new Date().toISOString();

      // Guardamos el mensaje en Firestore
      await this.contactoService.agregarMensaje(this.contacto); // Cambia guardarMensaje por agregarMensaje

      // Alerta de éxito
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos. Responderemos pronto.',
        icon: 'success'
      });

      // Limpiamos el formulario
      this.limpiarFormulario();
    } catch (error) {
      console.error('Error al enviar el mensaje: ', error);

      // Alerta de error
      Swal.fire({
        title: 'Error',
        text: 'No se pudo enviar el mensaje. Inténtalo más tarde.',
        icon: 'error'
      });
    }
  }

  /**
   * Método para limpiar los campos del formulario
   */
  limpiarFormulario() {
    this.contacto = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      fechaEnvio: ''
    };
  }
}
