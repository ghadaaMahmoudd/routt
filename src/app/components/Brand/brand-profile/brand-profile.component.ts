import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-brand-profile',
  templateUrl: './brand-profile.component.html',
  styleUrls: ['./brand-profile.component.css']
})
export class BrandProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      ownerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10,11}')]],
      brandName: ['', Validators.required],
      category: ['', Validators.required],
      membershipType: ['Basic']
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('User Data:', this.profileForm.value);
      alert('Profile Updated Successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
