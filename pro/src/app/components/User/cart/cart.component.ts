import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    { id: 1, name: 'Cup', price: 60, quantity: 1, image: 'assets/cup.jpg' },
    { id: 2, name: 'Shirt', price: 120, quantity: 2, image: 'assets/shirt.jpg' }
  ];
  shipping = 20;

  get subtotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get total() {
    return this.subtotal + this.shipping;
  }

  updateQuantity(item: any, change: number) {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
      item.quantity = newQuantity;
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }
}
