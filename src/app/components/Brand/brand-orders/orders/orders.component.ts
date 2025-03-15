import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any[] = [
    { id: 1, customer: 'Basma Badr', date: '02/5/2025 - 01:00 PM', cost: '100 L.E', shipping: 'Through the brand', status: 'acceptable' },
    { id: 2, customer: 'Basma Badr', date: '02/5/2025 - 01:00 PM', cost: '100 L.E', shipping: 'Through the brand', status: 'acceptable' },
    { id: 3, customer: 'Basma Badr', date: '02/5/2025 - 01:00 PM', cost: '0 L.E', shipping: 'Through the brand', status: 'unacceptable' },
    { id: 4, customer: 'Basma Badr', date: '02/5/2025 - 01:00 PM', cost: '0 L.E', shipping: 'Through the brand', status: 'unacceptable' },
    { id: 5, customer: 'Basma Badr', date: '02/5/2025 - 01:00 PM', cost: '100 L.E', shipping: 'Through the brand', status: 'acceptable' },
    { id: 6, customer: 'Basma Badr', date: '02/5/2025 - 01:00 PM', cost: '100 L.E', shipping: 'Through the brand', status: 'acceptable' },
    { id: 7, customer: 'John Doe', date: '02/6/2025 - 02:00 PM', cost: '50 L.E', shipping: 'Courier', status: 'acceptable' },
    { id: 8, customer: 'Jane Smith', date: '02/7/2025 - 03:00 PM', cost: '120 L.E', shipping: 'Express', status: 'unacceptable' },
    { id: 9, customer: 'Michael Lee', date: '02/8/2025 - 04:00 PM', cost: '90 L.E', shipping: 'Standard', status: 'acceptable' },
    { id: 10, customer: 'Anna Brown', date: '02/9/2025 - 05:00 PM', cost: '110 L.E', shipping: 'Through the brand', status: 'acceptable' },
    { id: 11, customer: 'Chris Evans', date: '02/10/2025 - 06:00 PM', cost: '70 L.E', shipping: 'Courier', status: 'unacceptable' }
  ];

  // orders: any[] = []; 
  page: number = 1;
  itemsPerPage: number = 5;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.ordersService.getOrders().subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
}
