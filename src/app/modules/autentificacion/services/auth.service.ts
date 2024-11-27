import { Injectable } from '@angular/core';
// Servicio de AUTENTIFICACIÓN de FIREBASE
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Servicio de COLECCIONES de FIREBASE
import { AngularFirestore } from '@angular/fire/compat/firestore';

// Observará los cambios
import { Observable } from 'rxjs';

// Itera la colección leyendo su información actual
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Propiedad privada para manejo del rol del usuario
  private rolUsuario: string | null = null;

  // Referenciar Auth de Firebase para inicializarlo
  constructor(
    private auth: AngularFireAuth,
    private servicioFirestore: AngularFirestore
  ) { }

  // Función para REGISTRO
  registrar(email: string, password: string){
    // Retorna nueva información de EMAIL y CONTRASEÑA
    return this.auth.createUserWithEmailAndPassword(email, password);
  }



  // Función para INICIO DE SESIÓN
  iniciarSesion(email: string, password: string){
    // Validar el email y la contraseña
    return this.auth.signInWithEmailAndPassword(email, password);
    //Este es un método de Firebase Authentication que intenta iniciar sesión con el correo electrónico y la contraseña proporcionados.
  }




  // Función para CERRAR SESIÓN
  cerrarSesion(){
    // Devolver una promesa vacía
    return this.auth.signOut();
  }




// Función asíncrona para obtener el UID del usuario autenticado
async obtenerUid() {
  // Captura el usuario actualmente autenticado mediante el servicio de autenticación.
  // `this.auth.currentUser` devuelve una promesa que contiene el usuario actual (si está autenticado).
  const user = await this.auth.currentUser;

  /*
    Verificación de si el usuario es `null`:
    - Si `user` es `null`, significa que no hay un usuario autenticado o que hubo un problema al obtener la información del usuario.
    - Ejemplos de casos:
      - El usuario no ha iniciado sesión.
      - La sesión ha expirado.
      - Problemas con la conexión a internet durante la autenticación.
  */
  if(user == null) {
    // Retorna `null` si no se encontró un usuario autenticado.
    return null;
  } else {
    // Si el usuario existe, devuelve su identificador único (UID).
    return user.uid;
  }
}






// Busca un usuario en la colección 'usuarios' filtrando por correo electrónico
obtenerUsuario(email: string) {
  // Accede a la colección 'usuarios' y aplica un filtro donde 'email' coincide con el valor proporcionado
  return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email))
    .get()  // Realiza la consulta
    .toPromise();  // Convierte el resultado en una promesa
}






 // Función para recuperar el rol de un usuario a partir de su UID
obtenerRol(uid: string): Observable<string | null> {
  // Accede a la colección 'usuarios' y al documento específico usando el UID
  return this.servicioFirestore.collection('usuarios').doc(uid).valueChanges()
    .pipe(
      // Transforma los datos obtenidos: si existe el usuario, retorna su rol; si no, retorna null
      map((usuario: any) => usuario ? usuario.rol : null)
    );
}


  // Obtiene el rol de la primera función y lo asigna a la propiedad privada local
  enviarRolUsuario(rol: string){
    this.rolUsuario = rol;
  }

  // Función para obtener el rol almacenado del usuario
obtenerRolUsuario(): string | null {
  // Retorna el rol del usuario, que puede ser un valor alfanumérico o null
  return this.rolUsuario;
}

}
