import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reg-one',
  templateUrl: './reg-one.component.html',
  styleUrls: ["./reg-one.component.css"]
})
export class RegOneComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
    }
  }
}
