// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// declare var bootstrap: any;
// @Component({
//   selector: 'app-order-managment',
//   templateUrl: './order-managment.component.html',
//   styleUrls: ['./order-managment.component.css'],
//      standalone:true,imports:[
//           CommonModule,
//           FormsModule,
//           ReactiveFormsModule,
//      ],
// })
// export class OrderManagmentComponent {

//   brands: Array<{
//     orderid: number;
//   date: any;
//     customer: string;
//     payment: any;
//     total: any;
//     delivery: string;
//     items: any;
// products:any;



//   }> = [];



//   selectedOrderProducts: { name: string; price: number; image: string }[] = [];


//   viewOrderDetails(brands: any) {
//     this.selectedOrderProducts = brands.products;
//   }

//   selectedBrand: any = null;
// payment: any;

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
//         orderid:1 ,
//        date: '4/1/1996',
//         customer: 'basma',

//         payment: 'success',
//         total: '77L.E',
//         delivery: 'era',
//         items: '5 items',
//         products: [
//           { name: 'wristwatch', price: 200, image: 'assets/wristwatch.jpg' },
//           { name: 't-shirts', price: 200, image: 'assets/t-shirts.jpg' }
//         ]




//       },
//       {
//         orderid:1 ,
//        date: '4/1/1996',
//         customer: 'basma',

//         payment: 'pending',
//         total: '77L.E',
//         delivery: 'era',
//         items: '5 items',
//         products: [
//           { name: 'wristwatch', price: 200, image: 'assets/wristwatch.jpg' },
//           { name: 't-shirts', price: 200, image: 'assets/t-shirts.jpg' }
//         ]

//       },
//     ];
//   }
// }





import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';

declare var bootstrap: any;

@Component({
  selector: 'app-order-managment',
  templateUrl: './order-managment.component.html',
  styleUrls: ['./order-managment.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class OrderManagmentComponent implements OnInit {
  orders: Array<any> = [];
  selectedOrderProducts: { name: string; price: number; image: string }[] = [];
  selectedOrder: any = null;
  isFilterVisible: boolean = false;

  constructor(private OrdersService: OrdersService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.OrdersService.getOrders().subscribe({
      next: (data: any[]) => {
        this.orders = data;
      },
      error: (err: any) => {
        console.error('Error loading orders:', err);
      }
    });
  }

  viewOrderDetails(order: any) {
    this.selectedOrderProducts = order.products ?? [];
  }

  onDeleteClick(order: any): void {
    this.selectedOrder = order;
    const modalElement = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  confirmDelete(): void {
    this.orders = this.orders.filter((order: any) => order !== this.selectedOrder);
    this.selectedOrder = null;
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

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }
}