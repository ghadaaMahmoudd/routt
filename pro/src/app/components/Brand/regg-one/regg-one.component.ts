import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regg-one',
  templateUrl: './regg-one.component.html',
  styleUrls: ['./regg-one.component.css']
})
export class ReggOneComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^01[0-9]{9}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['male', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
      alert('Registration successful!');
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
