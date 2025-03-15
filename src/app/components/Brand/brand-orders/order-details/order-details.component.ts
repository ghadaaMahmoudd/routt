import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: any;

  constructor(private route: ActivatedRoute, private orderService: OrdersService) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id'); 
    if (orderId) {
      this.orderService.getOrderById(orderId).subscribe(
        (data) => {
          this.order = data;
        },
        (error) => {
          console.error('Error fetching order details:', error);
        }
      );
    }

  }}
