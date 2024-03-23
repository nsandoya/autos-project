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
  autoEditarContent:any

  // Paginación
  rows:number = 10;
  pages:number = 1
  //stars:any = ""
  // Lo ponemos como 'private' porque así podremos acceder al servicio solo desde nuestro componente
  constructor(private listaService: AutosInfo){
    // Hay que evitar que el detail modifique la lista principal
    this.listaService.listaPrincipal$.subscribe((autos)=>{
      this.autos = autos;  
      console.log("Autos desde el constructor", autos)
    })
  }
  
  // OnInit es un evento (que en este caso se implementa como un método) que se ejecuta cuando carga un componente
  ngOnInit(): void{
    
    this.listaService.getCompleteList().subscribe((autos)=>{
      this.autos = autos;
      console.log("Autos despues de detail", this.autos)
    })
  }

  getAllWithParams(){
    this.listaService.getCompleteList("", this.rows, this.pages).subscribe((autos)=>{
      this.autos = autos;
      //this.pages =
    })
  }

  cambiarPagina(pages:number){
    this.pages = pages
    this.getAllWithParams()
  }

  listaDePaginas:Array<number> = []
  pagination(pages:number){
    this.listaDePaginas = []
    for(let i=1; i <= pages; i++){
      this.listaDePaginas.push(1)
    }
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

  nuevoAutoEditar(id:string){
    //this.autoEditar = id
    this.listaService.autoEditar.next(id)
    return this.autoEditar = this.listaService.autoEditar$.subscribe((auto)=>{
      this.autoEditar = auto;
      console.log("Se va a borrar este auto", auto)
    })
  }

  borrarAuto(id:string){
    return this.listaService.deleteItem(id)
  }

 /*  carToDelete(id:string){
    console.log("id obtenida", id)
  } */
  /* this.listaService.getCompleteList(id).subscribe((auto)=>{
    this.autoEditarContent = auto
    console.log("id a borrar obtenida", this.autoEditarContent)
  }) */
 


  /* setCarToEdit(auto:string){
    console.log("tabla comp, esta es la fx")

    this.listaService.carToEdit(auto)
    this.listaService.autoEditar$.subscribe((auto:any)=>{
      this.autoEditar = auto
      console.log("id a usar", this.autoEditar)
    })

  }
  
  getCarToEditData(auto:string){
    return this.listaService.autoEditar$.subscribe((autoInfo: any) => {
      this.autoEditarContent = autoInfo
      console.log("content", this.autoEditarContent)
    })
  } */
}
//if(!this.autoEditar) console.log("no hay id")

//this.getCarToEditData(this.autoEditar)
  /* this.listaService.autoEditar$.subscribe((auto:any) => {
  }) */

/* return this.listaService.getCarById(auto).subscribe((autoContent:ListaInterface)=>{
  this.autoEditarContent = autoContent
  console.log("y...",this.autoEditarContent)
}) */