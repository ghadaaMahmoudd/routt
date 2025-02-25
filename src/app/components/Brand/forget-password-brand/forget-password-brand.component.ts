import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'forget-password-brand',
  templateUrl: './forget-password-brand.component.html',
  styleUrls: ['./forget-password-brand.component.css']
})
export class ForgetPasswordBrandComponent {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
    }
  }
}
