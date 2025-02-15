import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Product 1',
      price: 100,
      image: 'assets/product1.jpg',
      description: 'This is a great product.'
    },
    {
      name: 'Product 2',
      price: 150,
      image: 'assets/product2.jpg',
      description: 'High quality and durable.'
    }
  ];

}
