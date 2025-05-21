// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private apiUrl = 'https://localhost:7053/api/Cart';

//   constructor(private http: HttpClient) {}

//   addToCart(product: any): Observable<any> {
//     return this.http.post(this.apiUrl, {
//       name: product.name,
//       price: product.price,
//       quantity: 1,
//       image: product.image
//     });
//   }

//   getCartItems(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   removeFromCart(productId: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${productId}`);
//   }

//   updateQuantity(productId: number, quantity: number): Observable<any> {
//     return this.http.put(`${this.apiUrl}/${productId}`, { quantity });
//   }
// }





//دا مؤقت لحد ما السيرفر يظبط وبعدين هنعمل لدا تهييش ونرجع الا فوقو 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:7053/api/Cart';
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl).pipe(
      tap(items => this.cartSubject.next(items))
    );
  }

  // addToCart(item: CartItem): Observable<any> {
  //   return this.http.post(this.apiUrl, item).pipe(
  //     tap(() => this.getCart().subscribe()) // refresh cart
  //   );
  // }


  addToCart(item: CartItem): Observable<any> {
  return this.http.post(this.apiUrl, item).pipe(
    tap(() => this.getCart().subscribe())
  );
}


// addToCart(item: any): Observable<any> {
//   return this.http.post('https://localhost:7053/api/Cart', item);
// }



  removeItem(itemId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${itemId}`).pipe(
      tap(() => this.getCart().subscribe())
    );
  }

  updateQuantity(item: CartItem): Observable<any> {
    return this.http.put(`${this.apiUrl}/${item.id}`, item).pipe(
      tap(() => this.getCart().subscribe())
    );
  }
}
