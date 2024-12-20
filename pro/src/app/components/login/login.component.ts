import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    registrationForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.registrationForm = this.fb.group({

        email: ['', [Validators.required, Validators.email]],

        password: ['', [Validators.required, Validators.minLength(6)]],

      });
    }

    onSubmit() {
      if (this.registrationForm.valid) {
        console.log('Form Submitted!', this.registrationForm.value);
      }
    }

  }
