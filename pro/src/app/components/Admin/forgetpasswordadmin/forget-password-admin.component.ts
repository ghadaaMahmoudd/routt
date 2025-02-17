import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'forgetpasswordadmin',
  templateUrl: './forget-password-admin.component.html',
  styleUrls: ['./forget-password-admin.component.css']
})
export class ForgetPasswordAdminComponent {
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

showNotification(): void {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.classList.remove('hidden');
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
      notification.classList.add('hidden');
    }, 3000);
  }
}

}

