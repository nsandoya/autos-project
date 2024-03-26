import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ClientesInterface } from '../interfaces/clientes-interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl:string = 'http://epico.gob.ec/vehiculo/public/api/'

  constructor(private http:HttpClient) { }

  getAllClients(){
    /* let body = new HttpParams();
    body = filtro? body.set('filtro',filtro) : body;
    body = rows? body.set('rows', rows) : body;
    body = page? body.set('page',page) : body */
    
    return this.http.get(this.baseUrl + 'cliente/')
  }

  getClientById(clienteId:any){
    let body = new HttpParams();
    body = clienteId? body.set('id',clienteId) : body;

    return this.http.get(this.baseUrl + 'cliente/' + clienteId)
  }
  getClientByName(name:any){
    /* let body = new HttpParams();
    body = name? body.set('filtro',name) : body;
    body = rows? body.set('rows', rows) : body;
    body = page? body.set('page',page) : body  */

    return this.http.get<ClientesInterface>(`http://epico.gob.ec/vehiculo/public/api/clientes/?filtro=${name}`).pipe(map((respuesta) => respuesta.data))
  }

  addClient(cliente:any){
    return this.http.post(this.baseUrl +'cliente/', cliente)
  }

  updateClient(id:string, cliente:any){
    return this.http.put(this.baseUrl + 'cliente/' + id, cliente)
  }

  deleteClient(id:string){
    return this.http.delete(this.baseUrl + 'cliente/'+ id)
  }
}
