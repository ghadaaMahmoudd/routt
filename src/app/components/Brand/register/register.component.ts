// src/app/components/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  brandForm: FormGroup;
  selectedFile: File | null = null;
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {
    this.brandForm = this.fb.group({
      BrandName: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      CategoryId: ['', Validators.required],
      OtherCategory: [''],
      Description: ['', Validators.required],
      Country: ['', Validators.required],
      City: ['', Validators.required],
      District: ['', Validators.required],
      UserNames: [[]],
      Urls: [[]],
      logoFile: [null]
    });

    this.fetchCategories();
  }

  fetchCategories(): void {
    this.api.getCategories().subscribe({
      next: (res: any) => {
        console.log('✅ Categories response:', res);
        this.categories = res.$values ?? [];
      },
      error: (err) => {
        console.error('❌ Failed to fetch categories', err);
      }
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.brandForm.valid) {
      const formValues = this.brandForm.value;

      console.log('🟢 بيانات الفورم المرسلة:', formValues);

      const formData = new FormData();
      formData.append('BrandName', formValues.BrandName);
      formData.append('PhoneNumber', formValues.PhoneNumber);
      formData.append('CategoryId', formValues.CategoryId);
      formData.append('OtherCategory', formValues.OtherCategory || '');
      formData.append('Description', formValues.Description);
      formData.append('Country', formValues.Country);
      formData.append('City', formValues.City);
      formData.append('District', formValues.District);
      formData.append('UserNames', JSON.stringify(formValues.UserNames ?? []));
      formData.append('Urls', JSON.stringify(formValues.Urls ?? []));
      
      if (this.selectedFile) {
        formData.append('logoFile', this.selectedFile);
      }

      this.api.createBrand(formData).subscribe({
        next: () => {
          console.log('✅ Brand created successfully');
          this.router.navigate(['/reg-three']);
        },
        error: (err: any) => {
  console.error('❌ Failed to register brand:', err);
}

      });

    } else {
      console.warn('⚠️ الفورم غير صالح. رجاءً تأكد من إدخال جميع البيانات المطلوبة.');
    }
  }

  goBack(): void {
    this.router.navigate(['/reggone']);
  }
}
