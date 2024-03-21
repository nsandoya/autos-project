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
    this.listaService.getCompleteList().subscribe((autos)=>{
      this.autos = autos
    })
    this.listaService.getFilteredList().subscribe((autos)=>{
      this.filterList = autos
    })
    console.log(this.autos)
    //this.filterList = this.listaService.searchItem(this.searchCr);
  }
  
  searchItem(){
    this.listaService.searchItem(this.searchCr)
  }
 /*  searchItem(){
    console.log("search", this.searchCr)
    this.filterList = this.listaService.searchItem(this.searchCr);
    console.log("lista filtrada", this.filterList)
  } */
  
  getFilteredList(){
    this.listaService.getFilteredList()
  }
}
