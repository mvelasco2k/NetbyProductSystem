import { Injectable } from '@angular/core';
import { EditProducto, NewProducto, Producto } from './main-list/product/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly apiUrl = 'http://localhost:5216/api/Product/';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl+'GetAllProducts');
  }

  getProductById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}GetProductById/${id}`);
  }

  createProduct(producto: NewProducto): Observable<Producto> {
    console.log('Creando producto:', producto);
    return this.http.post<Producto>(this.apiUrl+'CreateProduct', producto);
  }

  editProduct(producto: EditProducto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}EditProduct`, producto);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}DeleteProductById/${id}`);
  }
}
