// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5090/api';

  constructor(private http: HttpClient) {}

  registerBrand(payload: any) {
    return this.http.post(`${this.baseUrl}/Account/register/Brand`, payload);
  }

  createBrand(formData: FormData) {
    return this.http.post(`${this.baseUrl}/brands`, formData);
  }

  getCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }
}
