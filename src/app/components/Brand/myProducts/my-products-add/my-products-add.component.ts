import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-products-add',
  templateUrl: './my-products-add.component.html',
  styleUrls: ['./my-products-add.component.css']
})
export class MyProductsAddComponent {
  productForm: FormGroup;
  selectedFile: File | null = null;
  selectedColors: string[] = [];


  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      colors: [[]],
    });
  }

  toggleColor(color: string) {
    if (this.selectedColors.includes(color)) {
      this.selectedColors = this.selectedColors.filter(c => c !== color);
    } else {
      this.selectedColors.push(color);
    }
    this.productForm.patchValue({ colors: this.selectedColors });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.productForm.invalid) return;

    const formData = new FormData();
    formData.append('name', this.productForm.value.name);
    formData.append('type', this.productForm.value.type);
    formData.append('price', this.productForm.value.price);
    formData.append('description', this.productForm.value.description);
    formData.append('colors', JSON.stringify(this.productForm.value.colors));
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

  }

}
