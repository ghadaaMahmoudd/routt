import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product = {
    name: 'Coffee mug',
    price: 60.0,
    shortDescription: 'Stylish Coffee Mug Durable ceramic, 350ml capacity, perfect for daily use.',
    longDescription:
      'Discover the beauty of ceramics with our handcrafted mug. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.',
    images: [
      'assets/cup-1.jpg',
      'assets/cup-2.jpg',
      'assets/cup-3.jpg',
      'assets/cup-4.jpg',
    ],
    colors: ['brown', 'black', 'purple', 'pink', 'blue'],
  };

  selectedImage = this.product.images[0];
  quantity = 1;

  changeImage(image: string) {
    this.selectedImage = image;
  }

  updateQuantity(change: number) {
    const newQuantity = this.quantity + change;
    if (newQuantity > 0) {
      this.quantity = newQuantity;
    }
  }
}

