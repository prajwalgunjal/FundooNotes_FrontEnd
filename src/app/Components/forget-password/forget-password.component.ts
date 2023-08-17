import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPage! :FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.myForm()
  }

  ngOnInit(): void {
    
  }

  myForm(){
    this.forgetPage = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(8)]],
      Confirm_Password : ['',[Validators.required,Validators.minLength(8)]]
    })
  } 

  onSubmit(){
     
  }
}
