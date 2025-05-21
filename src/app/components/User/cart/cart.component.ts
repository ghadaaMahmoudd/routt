// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {
//   cartItems = [
//     { id: 1, name: 'Cup', price: 60, quantity: 1, image: 'assets/cup.jpg' },
//     { id: 2, name: 'Shirt', price: 120, quantity: 2, image: 'assets/shirt.jpg' }
//   ];
//   shipping = 20;

//   get subtotal() {
//     return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   }

//   get total() {
//     return this.subtotal + this.shipping;
//   }

//   updateQuantity(item: any, change: number) {
//     const newQuantity = item.quantity + change;
//     if (newQuantity >= 1) {
//       item.quantity = newQuantity;
//     }
//   }

//   removeItem(item: any) {
//     this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
//   }
// }





//المظبوط
// import { Component } from '@angular/core';

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {
//   cartItems: CartItem[] = [
//     { id: 1, name: 'Cup', price: 60, quantity: 1, image: 'assets/cup.jpg' },
//     { id: 2, name: 'Shirt', price: 120, quantity: 2, image: 'assets/shirt.jpg' }
//   ];
//   shipping = 20;

//   get subtotal(): number {
//     return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   }

//   get total(): number {
//     return this.subtotal + this.shipping;
//   }

//   updateQuantity(item: CartItem, change: number): void {
//     const newQuantity = item.quantity + change;
//     if (newQuantity >= 1) {
//       item.quantity = newQuantity;
//     }
//   }

//   removeItem(item: CartItem): void {
//     this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
//   }
// }




//دا مؤقت لحد م السيرفر يظبط وهنرجه تهييش الا فوقو

import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  shipping = 20;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }

  updateQuantity(item: CartItem, change: number): void {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
      const updatedItem = { ...item, quantity: newQuantity };
      this.cartService.updateQuantity(updatedItem).subscribe();
    }
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item.id).subscribe();
  }

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }
}
