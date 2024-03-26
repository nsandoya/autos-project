import { Component, OnInit } from '@angular/core';
import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  autos: ListaInterface[]| any = [];
  filterList: ListaInterface[] = []
  searchCr=''

  constructor(private listaService: AutosInfo){}

  ngOnInit(){
  }
  
  searchItem(){
    this.listaService.getCompleteList(this.searchCr).subscribe((autos)=>{
      this.autos = autos
      this.listaService.refreshList(this.autos)      
    })
    /* this.listaService.getPagesnRows("", this.listaService.rows, 1).subscribe((respuesta)=>{
      this.autos = respuesta.data;
      this.listaService.rows = respuesta.rows;
      this.listaService.pages = respuesta.pages;
    }) */
  }

  returnAllItems(){
    this.listaService.getCompleteList("", this.listaService.rows, 1).subscribe((autos)=>{
      this.autos = autos
      
      //console.log("Búsqueda 2.0",...this.autos)
      this.listaService.refreshList(this.autos)
      
    })
  }

  noValue(){
    if (!this.searchCr){
      console.log("no hay nada")
      this.returnAllItems()
    }
  }
}
