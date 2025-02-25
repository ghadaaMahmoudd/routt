import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-promocode',
  templateUrl: './edit-promocode.component.html',
  styleUrls: ['./edit-promocode.component.css']
})
export class EditPromocodeComponent {
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
