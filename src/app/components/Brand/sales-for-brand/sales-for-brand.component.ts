import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-for-brand',
  templateUrl: './sales-for-brand.component.html',
  styleUrls: ['./sales-for-brand.component.css'],
})
export class SalesForBrandComponent  {
  totalProductsSold = 350;
  selectedMonth = 'Mar 2024';
  searchQuery = '';

  first: number = 0;

  rows: number = 30;

  salesData = [
    { name: 'Customer Name', month: 'Mar 2024', purchased: 56, sales: 100, profit: '5000 L.E' },
  
  ];
  
// ngOnInit(){
//   this.getDataByBaggnatior()
//   }

  filteredData() {
    return this.salesData.filter((item) =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // onPageChange(event: any) {
  //   this.allProduct = []
  //   this.first = event.first;
  //   this.rows = event.rows;
  //   this.getDataByBaggnatior()
  // }
}

