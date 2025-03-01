import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent {
  totalProductsSold = 56;
  totalSales = 100;
  totalProfit = '500 L.E';

  salesData = [
    { brand: 'Basma', orderId: 15, date: '08/03/2024', quantity: 5, profit: '450 L.E', payment: 'Visa' },
    { brand: 'Basma', orderId: 98, date: '08/03/2024', quantity: 10, profit: '1500 L.E', payment: 'Fawry' },
    
  ];
}
