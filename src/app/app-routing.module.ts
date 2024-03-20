import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AutoDetailPageComponent } from './components/auto-detail-page/auto-detail-page.component';
import { TablaPrincipalComponent } from './components/tablaPrincipal/tablaPrincipal.component';
import { AutosMainPageComponent } from './components/autos-main-page/autos-main-page.component';

const routes: Routes = [
  {
    path: 'autos/:id',
    component: AutoDetailPageComponent
  },
  {
    path: '',
    component: AutosMainPageComponent
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
