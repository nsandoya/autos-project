import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaPrincipalComponent } from './components/tablaPrincipal/tablaPrincipal.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AutoDetailPageComponent } from './components/auto-detail-page/auto-detail-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AutosMainPageComponent } from './components/autos-main-page/autos-main-page.component';
import { RouterModule } from '@angular/router';
import { AutosComponent } from './components/autos/autos.component';
/* import { NuevoAutoComponent } from './components/nuevo-auto/nuevo-auto.component'; */
import { EditarAutoComponent } from './components/editar-auto/editar-auto.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BorrarAutoComponent } from './components/borrar-auto/borrar-auto.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TablaPrincipalComponent,
    ErrorPageComponent,
    AutoDetailPageComponent,
    SearchInputComponent,
    AddItemComponent,
    AutosMainPageComponent,
/*     NuevoAutoComponent, */
    EditarAutoComponent,
    BorrarAutoComponent,
    AutosComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
    
  ],
  exports:[
    NavbarComponent,
    TablaPrincipalComponent,
    ErrorPageComponent,
    AutoDetailPageComponent,
    SearchInputComponent,
    AddItemComponent,
    AutosMainPageComponent,
    AutosComponent,
/*     NuevoAutoComponent, */
    EditarAutoComponent, 
    BorrarAutoComponent,

  ]

})
export class AutosModule { }
