import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AutosModule } from './autos/autos.module';

@NgModule({
  declarations: [
    AppComponent, // Sin esta declaración, Angular no detecta los componentes de otros módulos que implementemos en el módulo principal, ¡y básicamente no habrá app de todas formas!
  ],
  imports: [
    HttpClientModule,
    AutosModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
