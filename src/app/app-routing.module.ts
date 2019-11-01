import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcLoginComponent } from './components/dc-login/dc-login.component';
import { AppComponent } from './app.component';
import { DcRegisterComponent } from './components/dc-register/dc-register.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: DcLoginComponent
  },
  {
    path: 'register',
    component: DcRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
