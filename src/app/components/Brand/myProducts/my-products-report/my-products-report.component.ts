import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-products-report',
  templateUrl: './my-products-report.component.html',
  styleUrls: ['./my-products-report.component.css']
})
export class MyProductsReportComponent implements OnInit {
  products = [
    { id: '', name: '', total: '', sold: '', remaining: '' },
    { id: '', name: '', total: '', sold: '', remaining: '' },
    { id: '', name: '', total: '', sold: '', remaining: '' },
    { id: '', name: '', total: '', sold: '', remaining: '' },
    { id: '', name: '', total: '', sold: '', remaining: '' },
    { id: '', name: '', total: '', sold: '', remaining: '' },
  ];
  searchText = '';
  currentPage = 1;
  itemsPerPage = 5;

  constructor() {}

  ngOnInit(): void {}

  filterProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get paginatedProducts() {
    const filtered = this.filterProducts();
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  getTotalPages(): number[] {
    return Array.from({ length: Math.ceil(this.filterProducts().length / this.itemsPerPage) }, (_, i) => i + 1);
  }
  
  
}



