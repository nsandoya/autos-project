import { ViewChild,Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-auto-detail-page',
  templateUrl: './auto-detail-page.component.html',
  styleUrl: './auto-detail-page.component.css'
})
export class AutoDetailPageComponent implements OnInit, AfterViewInit{
  auto: ListaInterface | any ;
  @ViewChild('main') main!: TemplateRef<any>;
  @ViewChild('detail1') detail1!: TemplateRef<any>;
  @ViewChild('detail2') detail2!: TemplateRef<any>;

  activeTab!: TemplateRef<any> /* = this.main */;
  // ActivatedRoute crea una instancia de clase que incluye, entre otras cosas, info asociada a un componente, cargada al route outlet
  // En mi caso, TablaPrincipal está cargada al route outlet, y al hacer click en uno de sus elementos, esta envía info (el id del auto) al routeLink.
  // Por ende, nosotros buscamos obtener ese dato para usarlo acá
  constructor(private route: ActivatedRoute, private autosInfoService: AutosInfo, private cdref: ChangeDetectorRef){

  }
  
  
  ngAfterViewInit(): void {
    this.activeTab = this.main ;
  }
 /*  ngAfterContentChecked() {
      this.activeTab.DataContext = this.DataContext;
      this.sampleViewModel.Position = this.Position;
      this.cdref.detectChanges();
   } */

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      const id = params['id'];
      console.log(id)

      this.autosInfoService.getItemById(id).subscribe((autos:any)=>{
        this.auto = autos
        //console.log(this.auto)
    })
    //console.log(this.activeTab)
      //console.log(this.autosInfoService.filterList)
      //console.log(this.auto)

    })
  }

  generateStars(n:number){
    return this.autosInfoService.generateStars(n)
  }
}
