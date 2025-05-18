// 



import { Component } from '@angular/core';
import { BrandRegistrationService } from 'src/app/services/brand-registration.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reg-three',
  templateUrl: './reg-three.component.html',
  styleUrls: ['./reg-three.component.css']
})
export class RegThreeComponent {
  isSubmitted = false;
  selectedPlan = ''; // الخطة المختارة
  errorMessage = ''; // رسالة الخطأ

  constructor(
    private registrationService: BrandRegistrationService,
    private http: HttpClient
  ) {}

  selectPlan(plan: string): void {
    this.selectedPlan = plan;
    this.registrationService.selectedPlan = plan;
  }

  submitRequest(): void {
    if (!this.selectedPlan) {
      this.errorMessage = 'Please select a plan before submitting.';
      return;
    }

    const finalData = this.registrationService.getFinalRegistrationData();
    finalData.plan = this.selectedPlan; // أضيفي الخطة المختارة إلى البيانات النهائية

    console.log('Final Data:', finalData);

    // إرسال البيانات إلى الـ API
    this.http
      .post('http://localhost:5090/api/Account/register/Brand', finalData)
      .subscribe({
        next: (res) => {
          console.log('Response:', res);
          this.isSubmitted = true; // عرض الـ Popup عند نجاح الإرسال
        },
        error: (err) => {
          console.error('Error:', err);
          this.errorMessage =
            err.error?.message || 'Something went wrong. Please try again.';
        }
      });
  }

  closePopup(): void {
    this.isSubmitted = false;
  }
}