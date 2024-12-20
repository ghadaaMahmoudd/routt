// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login-admin',
//   templateUrl: './login-admin.component.html',
//   styleUrls: ['./login-admin.component.css']
// })
// export class LoginAdminComponent {
//   loginForm: FormGroup;
//   hidePassword: boolean = true; // To toggle password visibility

//   constructor(private fb: FormBuilder) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       console.log('Login Data:', this.loginForm.value);
//     }
//   }

//   togglePasswordVisibility() {
//     this.hidePassword = !this.hidePassword;
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  registrationForm: FormGroup;
  loginError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;

      if (email === 'test@example.com' && password === 'password123') {
        this.loginError = false;
        console.log('Login successful!');
      } else {
        this.loginError = true;
        console.log('Login failed. Invalid credentials.');
      }
    } else {
      this.loginError = true;
      console.log('Form is invalid.');
    }
  }

  closeError() {
    this.loginError = false;
  }
}
