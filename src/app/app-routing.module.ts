import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './autos/components/error-page/error-page.component';
import { AutoDetailPageComponent } from './autos/components/auto-detail-page/auto-detail-page.component';
import { TablaPrincipalComponent } from './autos/components/tablaPrincipal/tablaPrincipal.component';
import { AutosMainPageComponent } from './autos/components/autos-main-page/autos-main-page.component';
import { AutosComponent } from './autos/components/autos/autos.component';
import { NuevoAutoComponent } from './autos/components/nuevo-auto/nuevo-auto.component';
import { EditarAutoComponent } from './autos/components/editar-auto/editar-auto.component';

const routes: Routes = [
  {
    path: 'autos',
    redirectTo: 'autos/all',
    pathMatch: 'full'
    //component: AutosMainPageComponent
  },
  {
    path: 'autos',
    component: AutosComponent,
    children: [
      { path: 'all', component: AutosMainPageComponent},
      { path: 'crear', component: NuevoAutoComponent},
      { path: 'editar', component: EditarAutoComponent},
    ]
  },
  {
    path: 'autos/:id',
    component: AutoDetailPageComponent
  },
  
  {
    path: '**',
    component: ErrorPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
