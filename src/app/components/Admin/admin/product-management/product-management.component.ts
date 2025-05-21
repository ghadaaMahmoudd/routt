// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// declare var bootstrap: any;
// @Component({
//   selector: 'app-product-managment',
//   templateUrl: './product-managment.component.html',
//   styleUrls: ['./product-managment.component.css'],
//      standalone:true,imports:[
//           CommonModule,
//           FormsModule,
//           ReactiveFormsModule,
//      ],
// })
// export class ProductManagmentComponent {
//   brands: Array<{
//     ProductName: string;
// logo:any;
//     category: string;
//     Brand: string;
//     price: number;
//     quantity: number;
//     rank: number;
//     date: any;
//   }> = [];

//   isFilterVisible: boolean = false;

//   toggleFilter() {
//     this.isFilterVisible = !this.isFilterVisible;
//   }

//   selectedBrand: any = null;

//   onDeleteClick(brand: any): void {
//     this.selectedBrand = brand;
//     const modalElement = document.getElementById('deleteModal');
//     const modal = new bootstrap.Modal(modalElement!);
//     modal.show();
//   }

//   confirmDelete(): void {
//     console.log('Deleting brand:', this.selectedBrand.name);
//     this.brands = this.brands.filter((brand: any) => brand !== this.selectedBrand);
//     this.selectedBrand = null;

//     const deleteModalElement = document.getElementById('deleteModal');
//     const deleteModal = bootstrap.Modal.getInstance(deleteModalElement!);
//     deleteModal.hide();

//     this.openSuccessModal();
//   }

//   openSuccessModal(): void {
//     const successModalElement = document.getElementById('successModal');
//     const successModal = new bootstrap.Modal(successModalElement!);
//     successModal.show();

//     setTimeout(() => {
//       successModal.hide();
//     }, 5000);
//   }

//   openEditModal(brand: any): void {
//     this.selectedBrand = { ...brand };
//     const modalElement = document.getElementById('editModal');
//     const modal = new bootstrap.Modal(modalElement!);
//     modal.show();
//   }
//   // openEditModal() {
//   //   const modalElement = document.getElementById('editProductModal');
//   //   if (modalElement) {
//   //     const modalInstance = new bootstrap.Modal(modalElement);
//   //     modalInstance.show();
//   //   }}

//   saveChanges(): void {
//     console.log('Saving changes for:', this.selectedBrand);
//     const modalElement = document.getElementById('editModal');
//     const modal = bootstrap.Modal.getInstance(modalElement!);
//     modal.hide();
//   }

//   product = {
//     name: 'headphones',
//     price: 250,
//     category: 'electrons',
//     quantity: 250,
//     isActive: true,
//     description: 'Stylish and durable coffee mug, perfect for daily use or gifting!',
//     color: 'brown',
//   };



//   selectColor(color: string) {
//     this.product.color = color;
//     console.log('Selected color:', color);
//   }


//   blockAccount(): void {
//     console.log('Blocking account for:', this.selectedBrand);
//     const modalElement = document.getElementById('editModal');
//     const modal = bootstrap.Modal.getInstance(modalElement!);
//     modal.hide();
//   }

//   openProductsModal(brands: any): void {
//     this.selectedBrand = brands;
//     const modalElement = document.getElementById('productsModal');
//     const modal = new bootstrap.Modal(modalElement!);
//     modal.show();
//   }

//   openTeamworkModal(brands: any): void {
//     this.selectedBrand = brands;
//     const modalElement = document.getElementById('teamworkModal');
//     const modal = new bootstrap.Modal(modalElement!);
//     modal.show();
//   }

//   ngOnInit(): void {
//     // تحميل بيانات مبدئية
//     this.brands = [
//       {
//         logo:"assets/Rectangle 70.png",
//         ProductName: 'headphone',

//             category: 'electronics',
//             Brand: "basma",
//             price: 13,
//             quantity: 10,
//             rank: 3.3,
//             date: "12/1/2020",
//       },
//     {
//         logo:"assets/Rectangle 70.png",
//         ProductName: 'headphone',

//             category: 'electronics',
//             Brand: "basma",
//             price: 13,
//             quantity: 10,
//             rank: 3.3,
//             date: "12/1/2020",
//       },
//     ];
//   }
// }


//الاساسي
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

import { HttpClientModule } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-product-managment',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class ProductManagementComponent implements OnInit {
  products: any = [];
  isFilterVisible: boolean = false;
  selectedProduct: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        // this.products = data?.values;
        this.products = (data as { [key: string]: any })["$values"];
        console.log(data);
      },
      error: (err) => {
        console.error('Error loading products:', err);
      }
    });
  }

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  onDeleteClick(product: any): void {
    this.selectedProduct = product;
    const modalElement = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  confirmDelete(): void {
    this.products = this.products.filter((product: any) => product !== this.selectedProduct);
    this.selectedProduct = null;

    const deleteModalElement = document.getElementById('deleteModal');
    const deleteModal = bootstrap.Modal.getInstance(deleteModalElement!);
    deleteModal.hide();

    this.openSuccessModal();
  }

  openSuccessModal(): void {
    const successModalElement = document.getElementById('successModal');
    const successModal = new bootstrap.Modal(successModalElement!);
    successModal.show();

    setTimeout(() => {
      successModal.hide();
    }, 3000);
  }

  openEditModal(product: any): void {
    this.selectedProduct = { ...product };
    const modalElement = document.getElementById('editModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  saveChanges(): void {
    // هنا يمكنك إرسال التعديلات للـ API لو أردت
    const modalElement = document.getElementById('editModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal.hide();
  }

  blockAccount(): void {
    // هنا يمكنك إرسال بلوك للـ API لو أردت
    const modalElement = document.getElementById('editModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal.hide();
  }
}




