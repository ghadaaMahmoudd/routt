// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Product } from '../models/product.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private apiUrl = 'https://localhost:7053/api/Product';

//   constructor(private http: HttpClient) {}


//   addProduct(productData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, productData);
//   }





//   getProducts(): Observable<Product[]> {
//   return this.http.get<Product[]>('https://localhost:7053/api/Product');
// }



//   getProductsByBrand(brandId: number): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/ByBrand/${brandId}`);
//   }
// }




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7053/api/Product';

  constructor(private http: HttpClient) {}

  // إضافة منتج جديد
  addProduct(product: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }


//   addProduct(product: FormData): Observable<any> {
//   return this.http.post('/api/products', product);
// }


  // جلب كل المنتجات
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // جلب المنتجات حسب البراند
  getProductsByBrand(brandId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/ByBrand/${brandId}`);
  }
}
