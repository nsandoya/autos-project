import { Component, OnInit } from '@angular/core';
import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';
import { SearchInputComponent } from '../search-input/search-input.component';
import { HttpParams } from '@angular/common/http';

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
  // HAY QUE SUSCRIBIRLAS A SUS ENQUIVALENTES EN EL SERVICIO?
  rows:any= 0;
  pages:any = 0
  page:any = 0
  listaDePaginas:Array<number> = []

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
    this.rows = this.listaService.rows
    this.pages = this.listaService.pages
    this.page = this.listaService.page
    
   /*  let body = new HttpParams();
    body =  body.set('filtro',"");
    body =  body.set('rows', this.rows);
    body =  body.set('page',this.page) */
    /* this.listaService.getCompleteList("", this.rows, this.pages).subscribe((autos)=>{

      this.autos = autos;
      //console.log("Autos despues de detail", this.autos)
    }) */
    
    this.listaService.getPagesnRows("", this.rows, 1).subscribe((respuesta)=>{
      this.autos = respuesta.data;
      this.rows = respuesta.rows;
      this.pages = respuesta.pages;
      this.pagination(this.pages)
      console.log("Desde tabla, oninit",this.rows, this.page, this.pages)
      console.log("lista a iterar", this.listaDePaginas)
    })

    //console.log("total de paginas", this.pages)
  }

  getAllWithParams(){
    // Corregir getPagesNRows
    /* this.listaService.getCompleteList("", this.rows, this.pages).subscribe((autos:any)=>{
      this.autos = autos;
    }) */
    /* this.listaService.getCompleteList("",this.rows,1).subscribe((autos:any)=>{
      this.autos = autos;
      console.log("nuevos autos", this.autos)
    }) */

    this.listaService.getPagesnRows("", this.rows, 1).subscribe((respuesta)=>{
      this.autos = respuesta.data;
      this.rows = respuesta.rows;
      this.pages = respuesta.pages;
      this.page = 1
      this.pagination(this.pages)
      console.log("Desde cambio de rows",this.rows, this.page, this.pages)
      console.log("lista a iterar", this.listaDePaginas)
    })

  }

  cambiarPagina(page:number){
    this.page = page
    //this.getAllWithParams()
    this.listaService.getCompleteList("", this.rows, this.page).subscribe((autos)=>{
      this.autos = autos
    })
  }

  pagination(pages:number){
    console.log("desde pagination", this.pages)
    this.listaDePaginas= []
    for(let i=1; i <= pages; i++){
      console.log("pagina..", i)
      this.listaDePaginas.push(i)
    }
  }

  nextPage(){
    if(this.page < this.pages){
      this.page = this.page + 1
      this.cambiarPagina(this.page)
      //this.getAllWithParams()
    }
    console.log(this.page)
  }
  prevPage(){
    if(this.page > 1){
      this.page = this.page - 1;
      this.cambiarPagina(this.page);
      //this.getAllWithParams()
    }
    console.log(this.page);
  }
  /* prevPage(){
    if(this.page > this.pages){
      this.page = this.page - 1
      this.cambiarPagina(this.page)

      //this.getAllWithParams()
    }
    console.log(this.page)

  } */
  
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