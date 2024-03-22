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
    //this.autos = this.listaService
    /* this.listaService.listaPrincipal.subscribe((autos:any)=>{
      this.autos = autos

    }) */
    
  
   /*  this.listaService.getFilteredList().subscribe((autos)=>{
      this.filterList = autos
    }) */
    /* this.listaService.getItemById(this.searchCr).subscribe((autos:any)=>{
      this.filterList = autos
    }) */

    //this.filterList = this.listaService.searchItem(this.searchCr);
  }
  
 /*  searchItem(){
    //this.listaService.searchItem(this.searchCr)
    //this.listaService.getItemById(this.searchCr)
  } */
  searchItem(){
    this.listaService.getCompleteList(this.searchCr).subscribe((autos)=>{
      this.autos = autos
      
      console.log("Búsqueda 2.0",...this.autos)
      console.log("Refresh",this.listaService.refreshList(this.autos))
      
    })

  
    /* this.listaService.searchItem(this.searchCr).subscribe((autos:any)=>{
      this.autos = autos */
      
    console.log("search", ...this.autos)
    /* this.filterList = this.listaService.searchItem(this.searchCr);
    console.log("lista filtrada", this.filterList) */
  //})
  
  /* getFilteredList(){
    this.listaService.getFilteredList()
  } */
}}