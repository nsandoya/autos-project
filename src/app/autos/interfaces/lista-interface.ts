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
