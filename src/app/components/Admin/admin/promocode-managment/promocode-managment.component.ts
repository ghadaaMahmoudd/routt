import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-promocode-managment',
  templateUrl: './promocode-managment.component.html',
  styleUrls: ['./promocode-managment.component.css']
})
export class PromocodeManagmentComponent {

  brands: Array<{
    promocode: any;
    brandd: string;
    description: string;
    created: any;
    expired: any;
    used: number;

    status: string;
   
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

  // saveChanges(): void {
  //   console.log('Saving changes for:', this.selectedBrand);
  //   const modalElement = document.getElementById('editModal');
  //   const modal = bootstrap.Modal.getInstance(modalElement!);
  //   modal.hide();
  // }

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
        promocode:'gbytr5',
        brandd: 'basma',
        description: '15% for all orders',
        created:'7/10/2020',
        expired:'7/10/2029',
        used: 10,
    
        status: "active",
      },
      {
        promocode:'gbytr5',
        brandd: 'basma',
        description: '15% for all orders',
        created:'7/10/2020',
        expired:'7/10/2029',
        used: 10,
    
        status: "active",
      },
    ];
  }



  // constructor(private fb: FormBuilder) {
  //   this.editForm = this.fb.group({
  //     promoCode: ['EXB52', Validators.required],
  //     expirationDate: [''],
  //     neverExpires: [false],
  //     discountAmount: [15, [Validators.required, Validators.min(0)]],
  //     condition: ['allOrders'],
  //     maxUsers: [null],
  //     unlimited: [false]
  //   });
  editForm:FormGroup =new FormGroup(
    {
      promoCode:new FormControl(null,Validators.required),
  
      expirationDate:new FormControl(null,Validators.required),
      neverExpires:new FormControl(null,Validators.required),
      discountAmount:new FormControl(null,Validators.required),
     condition:new FormControl(null,Validators.required),
      maxUsers:new FormControl(null,Validators.required),
       unlimited:new FormControl(null,Validators.required),
     }

  
  );

  toggleNeverExpires() {
    const neverExpires = this.editForm.value.neverExpires;
    this.editForm.patchValue({
      neverExpires: !neverExpires,
      expirationDate: !neverExpires ? '' : this.editForm.value.expirationDate
    });
  }

  toggleUnlimited() {
    const unlimited = this.editForm.value.unlimited;
    this.editForm.patchValue({
      unlimited: !unlimited,
      maxUsers: !unlimited ? null : this.editForm.value.maxUsers
    });
  }

  saveChanges() {
    if (this.editForm.valid) {
      console.log('Form Data:', this.editForm.value);
      // Logic for saving changes
    }
  }
}


