import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //, private jwtHelper: JwtHelperService, private router: Router, private toaster: ToastrService
  constructor(private http: HttpClient) {
  }

  url: string = 'https://fakestoreapi.com/'; //products




  getAllProducts(): Observable<Products> {

    return this.http.get<Products>(this.url + 'products');
  }



  getAlUsers() {

  }

}
