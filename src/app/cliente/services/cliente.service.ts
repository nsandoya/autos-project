import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl:string = 'http://epico.gob.ec/vehiculo/public/api/'

  constructor(private http:HttpClient) { }

  getAllClients(){
    return this.http.get(this.baseUrl + 'cliente/')
  }

  getClientById(clienteId:string){
    let body = new HttpParams();
    body = clienteId? body.set('id',clienteId) : body;

    return this.http.get(this.baseUrl + 'cliente/', {params: body})
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
