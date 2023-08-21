import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { HomeComponent } from './Components/home/home.component';
import { NoteComponent } from './Components/note/note.component';
import { GetnotesComponent } from './getnotes/getnotes.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
const routes: Routes = [
  {path : '',redirectTo:'Login',pathMatch:'full'},
  {path : 'Login', component : LoginComponent},
  {path : 'Register', component : RegisterComponent},
  {path : 'ForgetPassword' , component: ForgetPasswordComponent},
  {
    path: 'Home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'note', pathMatch: 'full' },
      { path: 'note', component: NoteComponent },
      {path: 'getnotes' , component:GetnotesComponent},
      { path: 'display', component:DisplayNotesComponent}
    ]
  },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }