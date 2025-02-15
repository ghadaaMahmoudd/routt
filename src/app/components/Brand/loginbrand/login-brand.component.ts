import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginbrand',
  templateUrl: './login-brand.component.html',
  styleUrls: ['./login-brand.component.css']
})
export class LoginBrandComponent {
  loginForm: FormGroup;
    loginError: boolean = false; 
  
    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
    onSubmit() {
      if (this.loginForm.valid) {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
  
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
      this.loginError = false; 
    }
  

}