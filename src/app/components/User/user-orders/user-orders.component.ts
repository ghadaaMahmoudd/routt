import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit{

  orders: any[] = [];           // All orders
  pagedOrders: any[] = [];      // Orders shown on current page
  pageSize = 4;                 // Items per page
  currentPage = 1;
  totalPages = 0;
  selectedOrder: any = null;

  ngOnInit(): void {
    // Sample data (you'll replace this with real API data)
    this.orders = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      date: '1/2/2025 - 3:00pm',
      orderNumber: 235 + i,
      products: '1 sunglasses, 2 t-shirts, lip gloss...',
      imageUrl: 'assets/sample-product.jpg',
      rating: Math.floor(Math.random() * 6)
    }));

    this.totalPages = Math.ceil(this.orders.length / this.pageSize);
    this.setPagedOrders();
  }

  setPagedOrders() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedOrders = this.orders.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.setPagedOrders();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  get pageNumbers(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  viewOrderDetails(order: any) {
    this.selectedOrder = order;
  }
}
