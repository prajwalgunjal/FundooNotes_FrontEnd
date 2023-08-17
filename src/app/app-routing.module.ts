import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [
  {path : 'Login', component : LoginComponent},
  {path : 'Register', component : RegisterComponent},
  {path : 'ForgetPassword' , component: ForgetPasswordComponent},
  {path : 'Home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }