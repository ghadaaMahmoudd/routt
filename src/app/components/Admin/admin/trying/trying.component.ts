// import { Component } from '@angular/core';
// declare var bootstrap: any;
// @Component({
//   selector: 'app-trying',
//   templateUrl: './trying.component.html',
//   styleUrls: ['./trying.component.css']
// })
// export class TryingComponent {



//   isFilterVisible: boolean = false;

//   toggleFilter() {
//     this.isFilterVisible = !this.isFilterVisible;

//   }





//   ngOnInit(): void {
//     this.loadBrands();
//   }

//   loadBrands(): void {

//     this.brands = [
//       {
//         brandName: 'Brand Name',
//         owner: 'Basma Badr',
//         email: 'basma@gmail.com',
//         category: 'clothes',
//         package: 'Basic',
//         joiningDate: '07/01/2025',
//         profit: '458K',
//         status: 'active',
//         logo: "assets/Rectangle 70.png"
//       },
//       {
//         brandName: 'Brand Name',
//         owner: 'Basma Badr',
//         email: 'basma@gmail.com',
//         category: 'clothes',
//         package: 'Basic',
//         joiningDate: '07/01/2025',
//         profit: '458K',
//         status: 'active',
//         logo: "assets/Rectangle 70.png"
//       }

//     ];
//   }



//   products: [
//     { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
//     { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
//     { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
//     { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
//     { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; },
//     { name: 'Coffee Mug'; price: 50; image: 'path-to-image.jpg'; }
//   ] = [] as any;

//   selectedBrand: any = null;

//   onDeleteClick(brand: any): void {
//     this.selectedBrand = brand;
//     const modalElement = document.getElementById('deleteModal');
//     const modal = new bootstrap.Modal(modalElement!);
//     modal.show();
//   }

//   confirmDelete(): void {
//     console.log('Deleting brand:', this.selectedBrand.name);
//     this.brands = this.brands.filter(brand => brand !== this.selectedBrand);
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

//   saveChanges(): void {
//     console.log('Saving changes for:', this.selectedBrand);

//     const modalElement = document.getElementById('editModal');
//     const modal = bootstrap.Modal.getInstance(modalElement!);
//     modal.hide();
//   }

//   blockAccount(): void {
//     console.log('Blocking account for:', this.selectedBrand);

//     const modalElement = document.getElementById('editModal');
//     const modal = bootstrap.Modal.getInstance(modalElement!);
//     modal.hide();
//   }


//   openProductsModal(brand: any): void {
//     this.selectedBrand = brand;
//     const modalElement = document.getElementById('productsModal');
//     const modal = new bootstrap.Modal(modalElement!);
//     modal.show();
//   }


//   openTeamworkModal(brand: any): void {
//     this.selectedBrand = brand;
//     const modalElement = document.getElementById('teamworkModal');
//     const modal = new bootstrap.Modal(modalElement!);
//     modal.show();
//   }
// }






// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// declare var bootstrap: any;

// @Component({
//   selector: 'app-trying',
//   templateUrl: './trying.component.html',
//   styleUrls: ['./trying.component.css'],
//      standalone:true,imports:[
//       CommonModule,
//       FormsModule,
//       ReactiveFormsModule,

//      ],
// })
// export class TryingComponent {
//   // تعريف المتغير brands كمصفوفة
//   brands: Array<{
//     brandName: string;
//     owner: string;
//     email: string;
//     category: string;
//     package: string;
//     joiningDate: string;
//     profit: string;
//     status: string;
//     logo: string;
//     products:any;
//   }> = [];
//   isChecked: boolean = false;
// products: any;

//   onToggleChange(): void {
//     console.log('Toggle state:', this.isChecked);
//   }

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

//   saveChanges(): void {
//     console.log('Saving changes for:', this.selectedBrand);
//     const modalElement = document.getElementById('editModal');
//     const modal = bootstrap.Modal.getInstance(modalElement!);
//     modal.hide();
//   }

//   blockAccount(): void {
//     console.log('Blocking account for:', this.selectedBrand);
//     const modalElement = document.getElementById('editModal');
//     const modal = bootstrap.Modal.getInstance(modalElement!);
//     modal.hide();
//   }

//   // openProductsModal(brands: any): void {
//   //   this.selectedBrand = brands;
//   //   const modalElement = document.getElementById('productsModal');
//   //   const modal = new bootstrap.Modal(modalElement!);
//   //   modal.show();
//   // }


//   openProductsModal(brand: any): void {
//     this.selectedBrand = brand;
//     const modalElement = document.getElementById('productsModal');
//     if (modalElement) {
//       const modal = new bootstrap.Modal(modalElement);
//       modal.show();
//     } else {
//       console.error('Products modal element not found.');
//     }
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
//         brandName: 'Brand Name',
//         owner: 'Basma Badr',
//         email: 'basma@gmail.com',
//         category: 'clothes',
//         package: 'Basic',
//         joiningDate: '07/01/2025',
//         profit: '458K',
//         status: 'active',
//         logo: "assets/Rectangle 70.png",
//         products: [
//           { name: 'T-shirt', price: 20, image: 'path-to-tshirt-image.jpg' },
//           { name: 'Jeans', price: 40, image: 'path-to-jeans-image.jpg' }
//         ]
//       },
//       {
//         brandName: 'Brand Name 2',
//         owner: 'Ahmed Ali',
//         email: 'ahmed@gmail.com',
//         category: 'electronics',
//         package: 'Premium',
//         joiningDate: '05/01/2023',
//         profit: '500K',
//         status: 'inactive',
//         logo: "assets/Rectangle 70.png",
//         products: [
//           { name: 'T-shirt', price: 20, image: 'path-to-tshirt-image.jpg' },
//           { name: 'Jeans', price: 40, image: 'path-to-jeans-image.jpg' }
//         ]
//       },
//     ];
//   }
// }





import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { HttpClientModule } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-trying',
  templateUrl: './trying.component.html',
  styleUrls: ['./trying.component.css'],
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class TryingComponent implements OnInit {
  brands: any = [];
  isChecked: boolean = false;
  isFilterVisible: boolean = false;
  selectedBrand: any = null;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.brandService.getBrands().subscribe({
      next: (data) => {
        this.brands = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error loading brands:', err);
      }
    });
  }

  onToggleChange(): void {
    console.log('Toggle state:', this.isChecked);
  }

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  onDeleteClick(brand: any): void {
    this.selectedBrand = brand;
    const modalElement = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  confirmDelete(): void {
    this.brands = this.brands.filter((brand: any) => brand !== this.selectedBrand);
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
    }, 3000);
  }

  openEditModal(brand: any): void {
    this.selectedBrand = { ...brand };
    const modalElement = document.getElementById('editModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  saveChanges(): void {
    // هنا يمكنك إرسال تعديلات للـ API لو أردت
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

  openProductsModal(brand: any): void {
    this.selectedBrand = brand;
    const modalElement = document.getElementById('productsModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Products modal element not found.');
    }
  }

  openTeamworkModal(brand: any): void {
    this.selectedBrand = brand;
    const modalElement = document.getElementById('teamworkModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
}
