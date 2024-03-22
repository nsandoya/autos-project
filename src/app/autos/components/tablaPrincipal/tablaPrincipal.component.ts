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

 /*  deleteItem(id:any){
    this.listaService.deleteItem(id);
    this.listaService.getCompleteList().subscribe((autos)=>{
      this.filterList = autos
    })
    console.log(this.autos)
  } */
  
  /* searchItem(){
    console.log("lista filtrada, tabla", this.filterList)
  } */
  //console.log("autos", this.autos)
  /* this.filterList = this.autos.filter((product:any) => product.modelo.toLowerCase().includes(this.searchCr.toLowerCase())) */
}
