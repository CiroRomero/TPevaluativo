import { CarruselCard } from './carrusel-card';
export interface RutaInicio {
        id: string;
        nombre: string;
        ruta: string;
        imagen: string;
        carruselCards: CarruselCard[]; // Añade esta línea
      }
      