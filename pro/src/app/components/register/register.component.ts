import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  brandForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.brandForm = this.fb.group({
      brandName: ['', Validators.required],
      category: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.brandForm.valid) {
      console.log(this.brandForm.value);
    }
  }

  goBack(): void {
    console.log("Back button clicked");
  }
}
