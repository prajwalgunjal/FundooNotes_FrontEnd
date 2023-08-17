import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerPage!: FormGroup
  constructor(private userservice : UserService, private formBuilder:FormBuilder) {
    this.ngOnInit()
   }

  ngOnInit(): void {
    this.registerPage =this.formBuilder.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      ConfirmPassword:['',Validators.required]
    })
  }
  next(){
    console.log(this.registerPage)
    let data ={
      FirstName:this.registerPage.value.FirstName,
      LastName:this.registerPage.value.LastName,
      email:this.registerPage.value.email,
      password:this.registerPage.value.password
    }
    this.userservice.Register(data).subscribe((res:any)=>{
      console.log(res.message);
      localStorage.setItem('token',res.data);
      //this.route.navigateByUrl("/home/home")
    });
  }

}