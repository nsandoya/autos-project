import { Component, OnInit } from '@angular/core';
import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent implements OnInit{
  //autos:ListaInterface|any = []
  lista:any
  auto:any
  constructor(private AutosInfoService: AutosInfo){}
   
  ngOnInit(): void {
    this.AutosInfoService.getCompleteList().subscribe((respuesta) => {
      this.lista = respuesta
      this.auto = this.lista[0]

      /* for(let i = 0; i<= this.lista.lenght; i++){
        setTimeout(()=>{
          this.auto = this.lista[i]
          
        },650)
      } */
      //console.log(respuesta)
    })
  }
}
