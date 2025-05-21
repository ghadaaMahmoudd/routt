// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// declare var bootstrap: any;
// @Component({
//   selector: 'app-client-managment',
//   templateUrl: './client-managment.component.html',
//   styleUrls: ['./client-managment.component.css'],
//      standalone:true,imports:[
//         CommonModule,
//     FormsModule,
//     ReactiveFormsModule,

//      ],
// })
// export class ClientManagmentComponent {

 
//   brands: Array<{
//     client: string;

//     email: string;
//     joiningDate: string;
//     lastLogin: string;
//     paid: string;
//     status: string;
//     logo: string;
//     activated:any;
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

//     this.brands = [
//       {
//         client: 'Basma',

//         email: 'basma@gmail.com',
//         joiningDate: '07/01/2025',
//         lastLogin:'1/2/2020',
//         paid: '350L.E',


//         status: 'active',
//         logo: "assets/Rectangle 70.png",
//          activated:"checked"
//       },
//       {
//         client: 'Basma',

//         email: 'basma@gmail.com',
//         joiningDate: '07/01/2025',
//         lastLogin:'1/2/2020',
//         paid: '350L.E',


//         status: 'active',
//         logo: "assets/Rectangle 70.png",
//         activated:"checked"
//       },
//     ];
//   }
//   openPopup() {
//     const modalElement = document.getElementById('imageModal');
//     if (modalElement) {
//       const bootstrapModal = new bootstrap.Modal(modalElement);
//       bootstrapModal.show();
//     }
//   }
//   products = [
//     { name: 'sunglasses', price: 350, image: 'assets/sunglasses.jpg' },
//     { name: 'lip gloss', price: 50, image: 'assets/lip-gloss.jpg' },
//     { name: 'perfume', price: 420, image: 'assets/perfume.jpg' },
//     { name: 'wristwatch', price: 200, image: 'assets/wristwatch.jpg' },
//     { name: 't-shirts', price: 200, image: 'assets/t-shirts.jpg' },
//     { name: 't-shirts', price: 200, image: 'assets/t-shirts.jpg' },
//   ];

  
// }






import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

declare var bootstrap: any;

@Component({
  selector: 'app-client-managment',
  templateUrl: './client-managment.component.html',
  styleUrls: ['./client-managment.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ClientManagmentComponent implements OnInit {
  clients: Array<any> = [];
  isFilterVisible: boolean = false;
  selectedClient: any = null;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (data: any[]) => {
        this.clients = data;
        console.log(data);
      },
      error: (err: any) => {
        console.error('Error loading clients:', err);
      }
    });
  }

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  onDeleteClick(client: any): void {
    this.selectedClient = client;
    const modalElement = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  confirmDelete(): void {
    this.clients = this.clients.filter((client: any) => client !== this.selectedClient);
    this.selectedClient = null;
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

  openPopup() {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const bootstrapModal = new bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }
}
