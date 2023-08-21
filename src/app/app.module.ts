import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { HttpsService } from './Services/https/https.service';
import { MatCardModule } from '@angular/material/card';
import { NoteComponent } from './Components/note/note.component';
import { NoteToolIconComponent } from './Components/note-tool-icon/note-tool-icon.component';
import { UndoRedoComponent } from './Components/undo-redo/undo-redo.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { GetnotesComponent } from './getnotes/getnotes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    HomeComponent,
    NoteComponent,
    NoteToolIconComponent,
    UndoRedoComponent,
    DisplayNotesComponent,
    GetnotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCardModule
  ],
  providers: [HttpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
