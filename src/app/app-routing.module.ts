import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AutoDetailPageComponent } from './components/auto-detail-page/auto-detail-page.component';
import { TablaPrincipalComponent } from './components/tablaPrincipal/tablaPrincipal.component';
import { AutosMainPageComponent } from './components/autos-main-page/autos-main-page.component';
import { AutosComponent } from './components/autos/autos.component';
import { NuevoAutoComponent } from './components/nuevo-auto/nuevo-auto.component';
import { EditarAutoComponent } from './components/editar-auto/editar-auto.component';

const routes: Routes = [
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
    path: 'autos',
    redirectTo: 'autos/all',
    pathMatch: 'full'
    //component: AutosMainPageComponent
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
