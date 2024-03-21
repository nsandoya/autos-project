import { Component, OnInit } from '@angular/core';
import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  //autos:ListaInterface|any = []

  constructor(/* private AutosInfoService: AutosInfo */){}
   
  /* ngOnInit(): void {
    this.AutosInfoService.getCompleteList().subscribe((respuesta) => {
      this.autos = respuesta
      console.log(this.autos.data)
    })
  } */
}
