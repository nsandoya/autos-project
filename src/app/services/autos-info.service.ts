import { Injectable } from '@angular/core';
import { ListaInterface } from '../interfaces/lista-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AutosInfo {
  autos : ListaInterface[] = [
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
  ];
  filterList: ListaInterface[] = [];

  listaPrincipal = new BehaviorSubject(this.autos)
  filterListObservable = new BehaviorSubject(this.autos)

  getCompleteList(){
    //return this.autos;
    return this.listaPrincipal.asObservable()
  }

  getItemById(id:any): ListaInterface | undefined{  // Find retorna el primer resultado que encuentra (y cuando lo encuentra, detiene su recorrido por el arreglo). Como estamos filtrando por ID, está bien así
    return this.autos.find((item)=>item.id == id)
  }

  addItem(item:ListaInterface):void{
    this.autos.push(item)
    this.listaPrincipal.next(this.autos)

  }

  deleteItem(itemID:any):void{
    this.autos = this.autos.filter((item) => item.id !== itemID)
    this.listaPrincipal.next(this.autos)
  }

  getFilteredList(){
    return this.filterListObservable.asObservable() 
  }
  searchItem(searchCr:any){
    console.log("desde la fx", searchCr)
    this.filterList = this.autos.filter((product) => product.
    name.toLowerCase().includes(searchCr.toLowerCase()))
    return this.filterListObservable.next(this.filterList) 
  }

  

  constructor() { }
}
