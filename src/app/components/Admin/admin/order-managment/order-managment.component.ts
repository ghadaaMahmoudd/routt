import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-order-managment',
  templateUrl: './order-managment.component.html',
  styleUrls: ['./order-managment.component.css'],
     standalone:true,imports:[
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
     ],
})
export class OrderManagmentComponent {

  brands: Array<{
    orderid: number;
  date: any;
    customer: string;
    payment: any;
    total: any;
    delivery: string;
    items: any;
products:any;



  }> = [];


  // products = [
  //   { name: 'sunglasses', price: 350, image: 'assets/sunglasses.jpg' },
  //   { name: 'lip gloss', price: 50, image: 'assets/lip-gloss.jpg' },
  //   { name: 'perfume', price: 420, image: 'assets/perfume.jpg' },
  //   { name: 'wristwatch', price: 200, image: 'assets/wristwatch.jpg' },
  //   { name: 't-shirts', price: 200, image: 'assets/t-shirts.jpg' }
  // ];
  selectedOrderProducts: { name: string; price: number; image: string }[] = [];


  viewOrderDetails(brands: any) {
    this.selectedOrderProducts = brands.products;
  }

  selectedBrand: any = null;
payment: any;

  onDeleteClick(brand: any): void {
    this.selectedBrand = brand;
    const modalElement = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  confirmDelete(): void {
    console.log('Deleting brand:', this.selectedBrand.name);
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
    }, 5000);
  }

  openEditModal(brand: any): void {
    this.selectedBrand = { ...brand };
    const modalElement = document.getElementById('editModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  saveChanges(): void {
    console.log('Saving changes for:', this.selectedBrand);
    const modalElement = document.getElementById('editModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal.hide();
  }

  blockAccount(): void {
    console.log('Blocking account for:', this.selectedBrand);
    const modalElement = document.getElementById('editModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal.hide();
  }

  openProductsModal(brands: any): void {
    this.selectedBrand = brands;
    const modalElement = document.getElementById('productsModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  openTeamworkModal(brands: any): void {
    this.selectedBrand = brands;
    const modalElement = document.getElementById('teamworkModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  ngOnInit(): void {
    // تحميل بيانات مبدئية
    this.brands = [
      {
        orderid:1 ,
       date: '4/1/1996',
        customer: 'basma',

        payment: 'success',
        total: '77L.E',
        delivery: 'era',
        items: '5 items',
        products: [
          { name: 'wristwatch', price: 200, image: 'assets/wristwatch.jpg' },
          { name: 't-shirts', price: 200, image: 'assets/t-shirts.jpg' }
        ]




      },
      {
        orderid:1 ,
       date: '4/1/1996',
        customer: 'basma',

        payment: 'pending',
        total: '77L.E',
        delivery: 'era',
        items: '5 items',
        products: [
          { name: 'wristwatch', price: 200, image: 'assets/wristwatch.jpg' },
          { name: 't-shirts', price: 200, image: 'assets/t-shirts.jpg' }
        ]

      },
    ];
  }
}


