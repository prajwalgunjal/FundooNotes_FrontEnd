import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerPage!: FormGroup

  constructor(private formBuilder:FormBuilder) {
    this.myForm()
   }

  ngOnInit(): void {
  }
  myForm(){
    this.registerPage =this.formBuilder.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',Validators.required,Validators.minLength(8)],
      Password:['',Validators.required],
      ConfirmPassword:['',Validators.required]
    })
  }
}
