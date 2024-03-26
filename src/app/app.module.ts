import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AutosModule } from './autos/autos.module';
import { ClienteModule } from './cliente/cliente.module';
import { InterceptorService } from './autos/services/interceptor.service';
import { LoginComponent } from './cliente/components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
 // Sin esta declaración, Angular no detecta los componentes de otros módulos que implementemos en el módulo principal, ¡y básicamente no habrá app de todas formas!
  ],
  imports: [
    HttpClientModule,
    AutosModule,
    ClienteModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule, 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
