export interface ClientesInterface {
    codigo: number;
    mensaje: string;
    data: {
        "id": 0,
        "nombre": string,
        "apellido": string,
        "password": string,
        "telefono": string,
        "email": string
    };
    rows?:number;
    pages?:number;
    records?:number;
    error: any;
    warning: any;
  

}
