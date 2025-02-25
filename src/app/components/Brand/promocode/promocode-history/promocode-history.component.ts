import { Component } from '@angular/core';

@Component({
  selector: 'app-promocode-history',
  templateUrl: './promocode-history.component.html',
  styleUrls: ['./promocode-history.component.css']
})
export class PromocodeHistoryComponent {
  promocodes = [
    { code: 'WEV158', description: '15% off For all orders', used: 5, created: '5/9/2024', expires: '10/1/2025' },
    { code: 'EXB52', description: '15% off For all orders', used: 0, created: '1/2/2025', expires: 'Unlimited' },
    { code: 'WFD268', description: '15% off For all orders', used: 30, created: '8/9/2024', expires: 'Unlimited' }
  ];
  showSuccessMessage: boolean | undefined;

  showDeleteModal = false;
  promoToDelete: any = null;

  confirmDelete(promo: any) {
    this.promoToDelete = promo;
    this.showDeleteModal = true;
    document.body.classList.add('modal-open');
  }
  
  cancelDelete() {
    this.showDeleteModal = false;
    document.body.classList.remove('modal-open');
  }
  
  deletePromo() {
    if (this.promoToDelete) {
      this.promocodes = this.promocodes.filter(promo => promo !== this.promoToDelete);
      this.promoToDelete = null;
      this.showDeleteModal = false;
      this.showSuccessMessage = true;
      document.body.classList.remove('modal-open');
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 2000);
    }
  }
  
}
