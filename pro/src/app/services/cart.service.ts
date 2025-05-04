import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private _HttpClient:HttpClient) {
    this.getUserCart().subscribe({
      next:(response)=>{this.cartitemsNum.next(response.numOfCartItems)}
    })
  }
  cartitemsNum=new BehaviorSubject<number>(0);

   headers:any={token:localStorage.getItem("token")}
  addCartItem(data:any):Observable<any>{
    return this._HttpClient.post("",data,{headers:this.headers});
  }
  getUserCart():Observable<any>{
    return this._HttpClient.get('',{headers:this.headers})
  }

removeCartItem(id:string):Observable<any>{
  return this._HttpClient.delete(`${id}`,{headers:this.headers})
}
// updateCartItem(id:string,count:number):Observable<any>{
//   return this._HttpClient.put(`${id}`,{count:count},{headers:this.headers})


// }
}
