import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  usuario:string = "nataly.sandoya";
  nombre_parametro:string = "user-request"

  constructor(){ }
  
  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
      let newReq = req.clone({
          headers: req.headers.append(this.nombre_parametro, this.usuario)
      })
      return next.handle(newReq)
  }
}


