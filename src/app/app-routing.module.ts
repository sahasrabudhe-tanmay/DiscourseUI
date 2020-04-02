import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcLoginComponent } from './components/dc-login/dc-login.component';
import { AppComponent } from './app.component';
import { DcRegisterComponent } from './components/dc-register/dc-register.component';
import { DcHomeComponent } from './components/dc-home/dc-home.component';
import { AuthenticationGuard } from './guards/authentication.guard';


const routes: Routes = [
  {
    path: '',
    component: DcHomeComponent,
    canActivate: [AuthenticationGuard]
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
