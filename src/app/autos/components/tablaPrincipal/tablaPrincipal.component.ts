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
export class TablaPrincipalComponent implements OnInit {
  // Recibir info (listaGeneral) de un servicio (getCompleteList)
  autos: ListaInterface[] | undefined
  filterList:ListaInterface[] | undefined
  showImg = true;
  //stars:any = ""
  // Lo ponemos como 'private' porque así podremos acceder al servicio solo desde nuestro componente
  constructor(private listaService: AutosInfo){}

  // OnInit es un evento (que en este caso se implementa como un método) que se ejecuta cuando carga un componente
  ngOnInit(): void{
    // acá nos estamos suscribiendo al observable, y se actualizará c/ vez que haya cambios
    this.listaService.getCompleteList().subscribe((autos)=>{
      this.autos = autos
    })
    console.log(this.autos)
    this.listaService.getFilteredList().subscribe((autosFiltrados)=>{
      this.filterList = autosFiltrados
    });
    
  }
  
  toggleImg(){
    this.showImg = !this.showImg
  }

  generateStars(number:number){
    let stars = [];
    for(let i=1; i<=number; i++){
      stars.push(i)
    }
    return(stars) 
  }

  deleteItem(id:any){
    this.listaService.deleteItem(id);
    this.listaService.getCompleteList().subscribe((autos)=>{
      this.filterList = autos
    })
    console.log(this.autos)
  }
  
  /* searchItem(){
    this.filterList = this.autos.filter((product) => product.name.toLowerCase().includes(this.searchCr.toLowerCase()))
  } */
}
