import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes: Routes = [
  { path: 'home', component: LandingSliderComponent },
  { path: 'catalogo', component: CatalogoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
