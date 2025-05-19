import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-request-managment',
  templateUrl: './request-managment.component.html',
  styleUrls: ['./request-managment.component.css'],
     standalone:true,imports:[
CommonModule,
FormsModule,
ReactiveFormsModule,
     ],
})
export class RequestManagmentComponent {

  brands: Array<{
   requestNum: number;
    brandd: string;
    owner: string;
    email: any;
    phone: any;
    address: any;
    date: any;
    category: string;
  package: string;
  }> = [];

  isFilterVisible: boolean = false;

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  selectedBrand: any = null;

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
  viewRequestDetails(brand: any) {
    this.selectedBrand = brand;
  }

  acceptRequest(brand: any) {
    console.log('Request accepted:', brand);
    // Add logic to handle acceptance
  }

  rejectRequest(brand: any) {
    console.log('Request rejected:', brand);
    // Add logic to handle rejection
  }

  ngOnInit(): void {
    // تحميل بيانات مبدئية
    this.brands = [
      {
        requestNum: 1,
        brandd: 'basma',
        owner: 'basma',
        email: 'basma@gmail.com',
        phone: '010222222222',
        address: 'menofia',
        date: '1/1/8989',
        category: 'cloth',
      package:'premium'
      },
      {
        requestNum: 1,
        brandd: 'basma',
        owner: 'basma',
        email: 'basma@gmail.com',
        phone: '010222222222',
        address: 'menofia',
        date: '1/1/8989',
        category: 'cloth',
      package:'premium'
      },
    ];
  }
}


