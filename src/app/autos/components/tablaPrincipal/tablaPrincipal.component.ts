import { Component, OnInit } from '@angular/core';
import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-tablaPrincipal',
  templateUrl: './tablaPrincipal.component.html',
  styleUrl: './tablaPrincipal.component.css'
})



// Existen eventos que ocurren durante (el ciclo de) la vida de un componente. En este caso, OnInit
export class TablaPrincipalComponent /* implements OnInit */ {
  // Recibir info (listaGeneral) de un servicio (getCompleteList)
  autos: ListaInterface[] | any
  filterList:ListaInterface[] | any
  showImg = true;

  autoEditar:string | any 
  autoEditarContent:ListaInterface | undefined
  //stars:any = ""
  // Lo ponemos como 'private' porque así podremos acceder al servicio solo desde nuestro componente
  constructor(private listaService: AutosInfo){
    this.listaService.listaPrincipal$.subscribe((autos)=>{
      this.autos = autos;  
    })
  }
  
  // OnInit es un evento (que en este caso se implementa como un método) que se ejecuta cuando carga un componente
  ngOnInit(): void{
    // acá nos estamos suscribiendo al observable, y se actualizará c/ vez que haya cambios
    /* this.listaService.listaPrincipal.subscribe((autos:any)=>{
      this.autos = autos
    }) */
    /* 

    this.listaService.getFilteredList().subscribe((listaFiltrada:any)=>{
      this.filterList = listaFiltrada
      console.log(this.filterList)

    }) */
    /* console.log(this.autos)
    this.listaService.getFilteredList().subscribe((autosFiltrados)=>{
      this.filterList = autosFiltrados
    }); */
    /* this.listaService.listaPrincipal.subscribe(
      (nuevosRegistros:any) => {
        this.autos = nuevosRegistros;
      }
    ); */
    this.listaService.getCompleteList().subscribe((autos)=>{
      this.autos = autos;
    })
    
    /* this.listaService.filterListObservable.subscribe((autos:any)=>{
      this.autos = autos
    }) */
    
  }
  
  toggleImg(){
    this.showImg = !this.showImg
  }

  generateStars(n:number){

    return this.listaService.generateStars(n)
  }

  getItemByID(){
    this.listaService.getCompleteList().subscribe((autos)=>{
      this.filterList = autos
      console.log(this.autos.data)
    })
  }

  deleteCar(id:string){
    console.log("id a borrar", id)
    this.listaService.deleteItem(id)/* .subscribe((respuesta)=>{
      if(respuesta.mensaje=="Vehiculo eliminado con exito") console.log("borrado!")
    }) */
  }


  setCarToEdit(auto:string){
    console.log("tabla comp, esta es la fx")

    this.listaService.carToEdit(auto)
    this.listaService.autoEditar$.subscribe((auto:any)=>{
      this.autoEditar = auto
      console.log("id a usar", this.autoEditar)
    })

  //if(!this.autoEditar) console.log("no hay id")

  //this.getCarToEditData(this.autoEditar)
    /* this.listaService.autoEditar$.subscribe((auto:any) => {
    }) */
  }
  
  getCarToEditData(auto:string){
    /* return this.listaService.getCarById(auto).subscribe((autoContent:ListaInterface)=>{
      this.autoEditarContent = autoContent
      console.log("y...",this.autoEditarContent)
    }) */
    return this.listaService.autoEditar$.subscribe((autoInfo: any) => {
      this.autoEditarContent = autoInfo
      console.log("content", this.autoEditarContent)
    })
  }
}
