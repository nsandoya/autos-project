import { Component } from '@angular/core';
import { AutosInfo } from '../../services/autos-info.service';

@Component({
  selector: 'app-borrar-auto',
  templateUrl: './borrar-auto.component.html',
  styleUrl: './borrar-auto.component.css'
})
export class BorrarAutoComponent {
  autoEditar:any 
  respuesta:any
  constructor(private listaService: AutosInfo){}

  deleteCar(){
    console.log("funciona el click")
    //this.autoEditar = id
    //console.log("observable", this.listaService.autoEditar$)
    return this.listaService.autoEditar$.subscribe((auto)=>{
      console.log("autooo",auto)
      this.listaService.deleteItem(auto)
      this.listaService.refreshList()
      //this.autoEditar = auto;
      //console.log("(Desde borrar-auto-comp)Se va a borrar este auto!", this.autoEditar)
    })
    /* console.log("id a borrar", this.autoEditar)
    return console.log(this.respuesta = this.listaService.deleteItem(id)) */

    //this.listaService.refreshList()
    /* .subscribe((respuesta)=>{
      if(respuesta.mensaje=="Vehiculo eliminado con exito") console.log("borrado!")
    }) */
  }
}
