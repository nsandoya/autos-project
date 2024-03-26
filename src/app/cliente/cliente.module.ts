import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';


@NgModule({
  declarations: [
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NuevoUsuarioComponent
  ]
})
export class ClienteModule { }
