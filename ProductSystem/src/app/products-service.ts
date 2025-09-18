import { Injectable } from '@angular/core';
import { Producto } from './main-list/product/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly apiUrl = 'http://localhost:5216/api/Product/GetAllProducts';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
