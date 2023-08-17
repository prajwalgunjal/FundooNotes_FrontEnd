import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginPage!: FormGroup
  constructor(private formBuilder : FormBuilder) {
    this.myForm()
   }

   myForm(){
    this.loginPage = this.formBuilder.group({
      Email : ['',[Validators.required,Validators.minLength(8)]],
      Password : ['',[Validators.required,Validators.minLength(8)]]
    })
   }

  ngOnInit(): void {
  }

}
