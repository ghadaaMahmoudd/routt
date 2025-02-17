// import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'reg-one',
//   templateUrl: './reg-one.component.html',
//   styleUrls: ["./reg-one.component.css"]
// })
// export class RegOneComponent {

//   //  registrationForm: FormGroup;

//  constructor(private _AuthService:AuthService, private _Router:Router) {}
//  apiErrorMessage:string='';
//  isLoading=false;
//   registerForm:FormGroup=new FormGroup({
//     // this.registrationForm = this.fb.group({
//       fullName:new FormControl ('', [Validators.required, Validators.minLength(3)]),
//       email: new FormControl('', [Validators.required, Validators.email]),
//       phoneNumber:new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$')]),
//       password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
//       gender:new FormControl ('', Validators.required)
//     });

// // handleRegister(regForm:FormGroup){
// //  if( this.registerForm.valid){
// //   this.isLoading=true;
// //   this._AuthService.register(regForm.value).subscribe({
// //     next:(response)=>{console.log(response)
// //       this.isLoading=false;
// //       this._Router.navigate(['/login'])
// //     },
// //     error:(err)=>{console.log(err.error.message)
// //       this.isLoading=false;
//       this.apiErrorMessage = err.error.message;
//     }
//   })
//   }
//  }
// //  onSubmit() {
// //    if (this.registrationForm.valid) {
// //      console.log('Form Submitted!', this.registrationForm.value);
// //    }
// //    }
//   }
