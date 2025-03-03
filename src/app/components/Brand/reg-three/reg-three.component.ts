

import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-three',
  templateUrl: './reg-three.component.html',
  styleUrls: ['./reg-three.component.css']
})
export class RegThreeComponent {

  basicPlan = {
    title: 'Basic',
    price: 25.0,
    features: ['1 Owner', 'Limited products', 'Post 5 products']
  };

  premiumPlan = {
    title: 'Premium',
    price: 150.0,
    features: ['Unlimited Owners', 'Unlimited Products', 'Post Free products']
  };


  startTrial(planType: string): void {
    console.log(`Free trial started for the ${planType} plan.`);
    alert(`You have started a free trial for the ${planType} plan.`);
  }

  isSubmitted = false; 

  submitRequest(): void {
    this.isSubmitted = true; 
  }

  closePopup(): void {
    this.isSubmitted = false; 
  }
}
