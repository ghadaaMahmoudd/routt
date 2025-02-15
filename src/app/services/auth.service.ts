import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  register(regForm:object):Observable<any>{
    return this._HttpClient.post('http://brandfy.tryasp.net/api/Account/register',regForm)
  }

  login(loginForm:object):Observable<any>{
    return this._HttpClient.post('http://brandfy.tryasp.net/api/Account/Login',loginForm)
  }
}
