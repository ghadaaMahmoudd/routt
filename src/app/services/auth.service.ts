// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private baseUrl = 'http://localhost:5000/api/Account';

//   constructor(private http: HttpClient) {}




//   registerBrand(payload: any): Observable<any> {
//   return this.http.post(`${this.baseUrl}/register/brand`, payload);
// }
// }




import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7053/api/brands';

  constructor(private http: HttpClient) {}

  // تسجيل البراند
  registerBrand(payload: any): Observable<any> {
    // إعداد الـ Headers (اختياري إذا كان مطلوبًا من السيرفر)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseUrl}`, payload, { headers }).pipe(
      catchError((error) => {
        console.error('❌ Error in registerBrand:', error);
        return throwError(() => new Error(this.getErrorMessage(error)));
      })
    );
  }

  // وظيفة لإرجاع رسالة خطأ واضحة
  private getErrorMessage(error: any): string {
    if (error.error?.message) {
      // رسالة الخطأ من السيرفر
      return error.error.message;
    } else if (error.status === 0) {
      // إذا لم يتمكن من الاتصال بالسيرفر
      return 'Unable to connect to the server. Please check your network.';
    } else {
      // رسالة خطأ عامة
      return 'An unexpected error occurred. Please try again.';
    }
  }





  //auth admin

    private apiUrl = 'https://localhost:7053/api/Account/Login/admin';
    loginAdmin(payload: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, payload, {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json', // تأكدي إنك تبعتي JSON
      // }),
headers
    });
  }
}
