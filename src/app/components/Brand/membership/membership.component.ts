import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
})
export class MembershipComponent {
  emailForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ])
  });

  get email() {
    return this.emailForm.get('email');
  }

  onSubmit() {
    if (this.emailForm.valid) {
      console.log('Valid Email:', this.emailForm.value);
    }
  }


  showPaymentDialog = false; 

  openPaymentDialog() {
    this.showPaymentDialog = true;
  }

  closePaymentDialog() {
    this.showPaymentDialog = false;
  }

  isVerifying: boolean = false;
  isSuccess: boolean = false;
  isFailure: boolean = false;
  showCardError: boolean = false;
  isInvalidCard: boolean = true;
  cardNumber: string = '';

  validateCardNumber() {
    this.showCardError = this.cardNumber.length > 0 && !/^\d{16}$/.test(this.cardNumber);
  }

  startVerification() {
    if (!/^\d{16}$/.test(this.cardNumber)) {
      this.isFailure = true;
      return;
    }
    this.isVerifying = true;
    this.isFailure = false;
    this.isSuccess = false;

    setTimeout(() => {
      this.isVerifying = false;

      if (this.cardNumber) {
        this.isSuccess = true;
      } else {
        this.isFailure = true;
      }
    }, 3000);
  }

  reset() {
    this.isSuccess = false;
    this.isFailure = false;
    this.cardNumber = ''; 
    this.showCardError = false;
  }
}


