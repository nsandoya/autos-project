import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosModule } from './autos/autos.module';
/* import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaPrincipalComponent } from './components/tablaPrincipal/tablaPrincipal.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AutoDetailPageComponent } from './components/auto-detail-page/auto-detail-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AutosMainPageComponent } from './components/autos-main-page/autos-main-page.component';
import { RouterModule } from '@angular/router';
import { AutosComponent } from './components/autos/autos.component';
import { NuevoAutoComponent } from './components/nuevo-auto/nuevo-auto.component';
import { EditarAutoComponent } from './components/editar-auto/editar-auto.component'; */
/* import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */


@NgModule({
  declarations: [
    /* AppComponent,
    NavbarComponent,
    TablaPrincipalComponent,
    ErrorPageComponent,
    AutoDetailPageComponent,
    SearchInputComponent,
    AddItemComponent,
    AutosMainPageComponent,
    AutosComponent,
    NuevoAutoComponent,
    EditarAutoComponent */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    AutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
