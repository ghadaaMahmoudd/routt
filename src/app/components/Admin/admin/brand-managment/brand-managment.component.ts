import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-brand-managment',
  templateUrl: './brand-managment.component.html',
  styleUrls: ['./brand-managment.component.css'],
     standalone:true,imports:[


  CommonModule,
    FormsModule,
    ReactiveFormsModule,
     ],
})
export class BrandManagmentComponent {
  // brands = [
  //   {
  //     brandName: 'Brand Name',
  //     owner: 'Basma Badr',
  //     email: 'basma@gmail.com',
  //     category: 'clothes',
  //     package: 'Basic',
  //     joiningDate: '07/01/2025',
  //     profit: '458K',
  //     status: 'active',
  //     logo: "assets/Rectangle 70.png"
  //   },
  //   {
  //     brandName: 'Brand Name',
  //     owner: 'Basma Badr',
  //     email: 'basma@gmail.com',
  //     category: 'clothes',
  //     package: 'Basic',
  //     joiningDate: '07/01/2025',
  //     profit: '458K',
  //     status: 'active',
  //     logo: "assets/Rectangle 70.png"
  //   },
  // ];


  isFilterVisible: boolean = false;

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;

  }




  // isFilterVisible: boolean = false;

  // toggleFilter() {
  //   this.isFilterVisible = !this.isFilterVisible;
  // }

  brands = [
    {
      brandName: 'Brand Name',
      owner: 'Basma Badr',
      email: 'basma@gmail.com',
      category: 'clothes',
      package: 'Basic',
      joiningDate: '07/01/2025',
      profit: '458K',
      status: 'active',
      logo: "assets/Rectangle 70.png",

    },
    {
      brandName: 'Brand Name',
      owner: 'Basma Badr',
      email: 'basma@gmail.com',
      category: 'clothes',
      package: 'Basic',
      joiningDate: '07/01/2025',
      profit: '458K',
      status: 'active',
      logo: "assets/Rectangle 70.png"
    },

  ];


  isFrameVisible: boolean = false;

  toggleFrame(): void {
    this.isFrameVisible = !this.isFrameVisible;
  }

  // isVisible: boolean = false ;

  // closeFilter() {
  //   this.isVisible = true;


  products: [
    { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
    { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
    { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
    { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
    { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
    { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; }
  ] = [] as any;

  selectedBrand: any = null;

  onDeleteClick(brand: any): void {
    this.selectedBrand = brand;
    const modalElement = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  confirmDelete(): void {
    console.log('Deleting brand:', this.selectedBrand.name);
    this.brands = this.brands.filter(brand => brand !== this.selectedBrand);
    this.selectedBrand = null;


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
    }, 5000);
  }





  // selectedBrand: any = null;

  openEditModal(brand: any): void {
    this.selectedBrand = { ...brand }; // نسخ البيانات لتجنب التعديل المباشر
    const modalElement = document.getElementById('editModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  saveChanges(): void {
    console.log('Saving changes for:', this.selectedBrand);
    // منطق الحفظ هنا (مثل استدعاء API)
    const modalElement = document.getElementById('editModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal.hide();
  }

  blockAccount(): void {
    console.log('Blocking account for:', this.selectedBrand);
    // منطق الحظر هنا
    const modalElement = document.getElementById('editModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal.hide();
  }


  openProductsModal(brand: any): void {
    this.selectedBrand = brand; // تحديد العلامة التجارية المختارة
    const modalElement = document.getElementById('productsModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }


  openTeamworkModal(brand: any): void {
    this.selectedBrand = brand;
    const modalElement = document.getElementById('teamworkModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
}

  // openDeleteModal(): void {
  //   const modalElement = document.getElementById('deleteModal');
  //   const modal = new bootstrap.Modal(modalElement!);
  //   modal.show();
  // }

  // confirmDelete(): void {
  //   console.log('Item deleted.');
  //   // أضف هنا منطق الحذف الخاص بك
  // }

//   showSuccessMessage: boolean | undefined;

//   showDeleteModal = false;
//   BrandToDelete: any = null;

//   confirmDelete(member: any) {
//     this.BrandToDelete = member;
//     this.showDeleteModal = true;
//     document.body.classList.add('modal-open');
//   }

//   cancelDelete() {
//     this.showDeleteModal = false;
//     document.body.classList.remove('modal-open');
//   }

//   deleteBrand() {
//     if (this.BrandToDelete) {
//       this.BrandMembers = this.Brand.filter(Brand => Brand!== this.BrandToDelete);
//       this.BrandToDelete = null;
//       this.showDeleteModal = false;
//       this.showSuccessMessage = true;
//       document.body.classList.remove('modal-open');
//       setTimeout(() => {
//         this.showSuccessMessage = false;
//       }, 2000);
//     }
//   }

// }






