import { Injectable } from '@angular/core';
import { Producto } from './main-list/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productos: Producto[] = [
    new Producto(1, 'Producto 1', 'Primer producto de ejemplo', 50.00),
    new Producto(2, 'Producto 2', 'Segundo producto de ejemplo', 75.00),
    new Producto(3, 'Producto 3', 'Tercer producto de ejemplo', 100.00)
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }
}
