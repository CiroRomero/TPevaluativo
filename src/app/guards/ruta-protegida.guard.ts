import { CanActivateFn } from '@angular/router';

// Inyección de servicios
import { inject } from '@angular/core';

import { AuthService } from '../modules/autentificacion/services/auth.service';

import { Router } from '@angular/router';

// Operadores de tipo OBSERVABLES
import { map, switchMap, of, from } from 'rxjs';

//rutaProtegidaGuard: Se ejecuta cuandointenta acceder a una ruta protegida.//CanActivateFn: Define una función que decide si una ruta puede activarse.
export const rutaProtegidaGuard: CanActivateFn = (route, state) => { 
  // Inyectamos/ instanciamos servicio de autentificación
  const servicioAuth = inject(AuthService); //Se inyectan el servicios de autenticación.

  // Inyectamos/ instanciamos servicio de rutas
  const servicioRutas = inject(Router); //Se inyectan el servicios enrutamiento.

  // Especificamos el rol esperado en el guardián
  const rolEsperado = "admin";

  return from (servicioAuth.obtenerUid()).pipe( //obtenerUid(): Verifica si el usuario está autenticado (devuelve su ID si lo está).
    //switchMap: Si el usuario tiene un uid, se continúa con otra comprobación.
    switchMap(uid => {
      if (uid) {
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol => {
            if (rol === rolEsperado) {
              // Si coincide el rol esperado, habilita acceso al usuario
              console.log("Usuario verificado como administrador.");

              return true;
            } else {
              // Caso contrario, deniega acceso
              return false;
            }
          })
        )
      } else {
        // Ej.: No está registrado o es de tipo "visitante"
        console.log("Usuario no validado. Permisos insuficientes.");

        // Redirecciona a inicio para usuarios no validados o sin permiso de admin
        return of(servicioRutas.createUrlTree(["/inicio"]));
      }
    })
  )
};