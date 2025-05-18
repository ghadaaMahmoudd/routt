//




import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-regg-one',
  templateUrl: './regg-one.component.html',
  styleUrls: ['./regg-one.component.css']
})
export class ReggOneComponent {
  registrationForm: FormGroup;
  isLoading: boolean = false; // حالة التحميل
  errorMessage: string | null = null; // رسالة الخطأ

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {
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
      this.isLoading = true; // بدء التحميل
      this.errorMessage = null; // تفريغ رسائل الخطأ

      const { fullName, email, phoneNumber, password, gender } = this.registrationForm.value;

      // تقسيم الاسم الأول والأخير
      const [firstName, ...lastParts] = fullName.trim().split(' ');
      const lastName = lastParts.join(' ') || '';

      const payload = {
        email,
        phoneNumber,
        password,
        gender,
        firstName,
        lastName
      };

      // إرسال البيانات إلى الـ API
      this.api.registerBrand(payload).subscribe(
        (res: any) => {
          this.isLoading = false; // إنهاء التحميل
          const token = res.token || res.accessToken || res.jwt || null; // حسب اسم التوكن
          const userType = res.userType || res.role || 'Brand'; // حسب السيرفر

          if (token) {
            localStorage.setItem('token', token);
            localStorage.setItem('userType', userType);

            this.router.navigate(['/register/step-2']); // الانتقال للخطوة التالية
          } else {
            this.errorMessage = 'Unexpected response from server. Please try again.';
          }
        },
        (err: any) => {
          this.isLoading = false; // إنهاء التحميل
          this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }
}
