/* export interface ListaInterface {
    id: number,
    name: string,
    detail: string,
    image: string,
    stars?: number
} */

export interface ListaInterface {
    codigo: string,
    marca: string,
    modelo: string,
    foto: string,
    anio: number,
    kilometraje: 0,
    precio: number | any,
    calificacion: number
}

export interface RespuestaAPI {
    codigo: number;
    mensaje: string;
    data: {
      id: number;
      codigo: string;
      marca: string;
      modelo: string;
      foto: string | null;
      anio: number;
      calificacion: number;
      fecha_creacion: string;
      fecha_modificacion: string;
      usuario: string;
      usuario_mod: string;
      kilometraje: number;
      precio: string;
    };
    error: any;
    warning: any;
  }
  
