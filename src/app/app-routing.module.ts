import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';
import { LoginPageComponent } from './Login/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registry', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
