import { Component, OnInit } from '@angular/core';
import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';

@Component({
  selector: 'app-autos-main-page',
  templateUrl: './autos-main-page.component.html',
  styleUrl: './autos-main-page.component.css'
})
export class AutosMainPageComponent /* implements OnInit */ {
  /* autos:ListaInterface | any
  filterList:ListaInterface | any

  constructor(private listaService: AutosInfo){}

  ngOnInit(): void {
    this.listaService.getCompleteList().subscribe((autos)=>{
      this.autos = autos
      console.log(this.autos.data)
    })

    this.listaService.getFilteredList().subscribe((listaFiltrada:any)=>{
      this.filterList = listaFiltrada
    })
  } */
}
