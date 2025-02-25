import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-promocode',
  templateUrl: './create-promocode.component.html',
  styleUrls: ['./create-promocode.component.css']
})
export class CreatePromocodeComponent {
  promoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.promoForm = this.fb.group({
      promocode: [''],
      expirationDate: [''],
      neverExpires: [false],
      discountAmount: [''],
      condition: ['For all orders'],
      maxUsers: [''],
      unlimitedUsers: [false]
    });
  }

}
