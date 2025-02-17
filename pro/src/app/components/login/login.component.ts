import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    // registrationForm: FormGroup;

    // constructor(private fb: FormBuilder) {
    //   this.registrationForm = this.fb.group({

     constructor(private _AuthService:AuthService, private _Router:Router) {}
     apiErrorMessage:string='';
     isLoading=false;
      registerForm:FormGroup=new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),

         password:new FormControl ('', [Validators.required, Validators.minLength(6)]),

      });
handleLogin(loginForm:FormGroup){
if(loginForm.valid){
  this.isLoading=true;
  this._AuthService.login(loginForm.value).subscribe({
    next:(response)=>{console.log(response)
      this.isLoading=false;
      this._Router.navigate(['/home'])
    },
    error:(err)=>{console.log(err.error.message)
      this.isLoading=false;
      this.apiErrorMessage = err.error.message;
    }
  })
}
}
    }

  //   onSubmit() {
  //     if (this.registrationForm.valid) {
  //       console.log('Form Submitted!', this.registrationForm.value);
  //     }
  //   }


