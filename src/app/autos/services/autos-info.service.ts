import { Injectable, OnInit } from '@angular/core';
import { ListaInterface, RespuestaAPI } from '../interfaces/lista-interface';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AutosInfo implements OnInit{
  /* autos : ListaInterface[] = [
    {
      id: 1,
      name: "Mazda X5",
      detail: "lorem ipsum",
      image: "https://www.grupolader.com/hubfs/MAZDA/Modelos/CX-5/cx5-sport-mt.png",
      stars: 3
    },
    {
      id: 2,
      name: "Aston Martin",
      detail: "lorem ipsum",
      image: "https://www.amalgamcollection.com/cdn/shop/files/DSCF8487_grande.jpg?v=1705422111",
      stars: 5
    },
    {
      id: 3,
      name: "Porsche AG",
      detail: "lorem ipsum",
      image: "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-911/small/3cf76e8c-6694-11e9-80c4-005056bbdc38;sQ;twebp;c1696;gc/porsche-small.webp",
      stars: 5
    }
  ]; */
  baseURL = "https://epico.gob.ec/vehiculo/public/api/"
  autos:ListaInterface[] | any = ""
  filterList: ListaInterface[] | any= "";

  listaPrincipal = new Subject();
  listaPrincipal$ = this.listaPrincipal.asObservable()

  autoEditar = new Subject();
  autoEditar$ = this.autoEditar.asObservable()
  /* listaPrincipal: ListaInterface| any
  filterListObservable: ListaInterface | any */

  getCompleteList(filtro?:string, rows?:number, page?:number){
    let body = new HttpParams();
    body = filtro? body.set('filtro',filtro) : body;
    body = rows? body.set('rows', rows) : body;
    body = page? body.set('page',page) : body

    // Aquí estaba el problema
    return this.http.get<RespuestaAPI>(this.baseURL + 'vehiculos/', {params: body}).pipe(
      map((autos) => autos.data)
    )
    // En caso de que no funcione lo de arriba, dejar esto de acá como activo
    /* return this.listaPrincipal = this.http.get<RespuestaAPI>(this.baseURL + 'vehiculos/').pipe(
      map((autos) => autos.data)
    ) */
    /* .pipe(
      map(autos => autos.data)
      //Object.keys(datos).map((key) => datos[key])
    ) */
    //return this.listaPrincipal.asObservable()
  }
  

  getItemById(id:any): ListaInterface | any{  // Find retorna el primer resultado que encuentra (y cuando lo encuentra, detiene su recorrido por el arreglo). Como estamos filtrando por ID, está bien así
    //return this.filterList = this.http.get(this.baseURL + 'vehiculo/' +id)
    return this.http.get<RespuestaAPI>(this.baseURL+'vehiculo/'+id).pipe(map((auto) => auto.data))
    //return this.autos.find((item:any)=>item.id == id)
  }
  /* getCarById(id:any): ListaInterface | any{  
    return this.autoEditar$ = this.http.get<RespuestaAPI>(this.baseURL+'vehiculo/'+id).pipe(map((auto) => auto.data))
    //return this.autos.find((item:any)=>item.id == id)
  } */

  addItem(item:ListaInterface){
   // this.listaPrincipal.next(this.autos) 
    return this.http.post<ListaInterface>(this.baseURL+'vehiculo/', item)
    /* this.autos.push(item)*/

  }

  deleteItem(itemID:any){
    return this.http.delete(this.baseURL+'vehiculo/'+itemID).subscribe((respuesta:any)=>{
      console.log("respuesta borrado", respuesta)
      if(respuesta.codigo==1){
        alert("El auto fue eliminado")
        this.getCompleteList().subscribe((autos)=>{
          this.listaPrincipal.next(autos)
        })
        //this.refreshList(this.getCompleteList())
      }else{
        alert("Error. Inténtalo más tarde")
      }
    }) // Esto de por si es un observable
     /* return this.http.delete(this.baseURL+'vehiculo/'+itemID).subscribe(
      (response) => {
        console.log("borrado", itemID);
        //this.router.navigate(['/autos/'])

        this.getCompleteList()
        // Aquí puedes actualizar tu lista de autos si es necesario
      },
      error => {
        console.log("Error al borrar el auto:", error);
      }
    ); */
    /* this.autos = this.autos.filter((item:any) => item.id !== itemID)
    this.listaPrincipal.next(this.autos) */
  }

  refreshList(nuevosRegistros?: any) {
    /* return this.listaPrincipal$
    return this.listaPrincipal$ = nuevosRegistros */
    return this.listaPrincipal.next(nuevosRegistros);
  }

/*   carToEdit(auto:string){
    console.log("id auto recibida", auto)
    this.autoEditar.next(auto)
    //return this.getCarById(auto)

  } */

  /* refreshCarToEdit(auto:string) {
    return this.autoEditar.next(auto);
  } */
  /* getFilteredList(){
    return this.filterListObservable.asObservable()
    //return this.filterListObservable.asObservable() 
  } */
  editItem(id:string, body:any){
    return this.http.put(this.baseURL + 'vehiculo/', id,{params: body})/* .subscribe((auto)=>{
      console.log("Peticion", this.http)
    }) */
    //return this.http.put(this.baseURL + 'vehiculo/'+ id,{params: body}).subscribe((auto)=>{
      //console.log("Auto actualizado", auto)
  }

  searchItem(searchCr:any){
    console.log("desde la fx", searchCr)
    
    return this.autos = this.http.get<RespuestaAPI>(`http://epico.gob.ec/vehiculo/public/api/vehiculos/?filtro=${searchCr}`).pipe(map((auto) => auto.data))
    //console.log(this.autos)

    /* this.filterList = this.autos.data.filter((product:any) => product.
    modelo.toLowerCase().includes(searchCr.toLowerCase()))
    return this.filterList.next(this.filterList)  */
  }

  generateStars(number:number){
    let stars = [];
    for(let i=1; i<=number; i++){
      stars.push(i)
    }
    return(stars) 
  }


  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    //this.listaPrincipal = new BehaviorSubject(this.autos)
    //this.filterListObservable = new BehaviorSubject(this.autos)

  }
}
