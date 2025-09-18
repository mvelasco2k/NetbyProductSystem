import { Component } from '@angular/core';
import { Producto } from './product.model';
import { ProductsService } from '../../products-service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  productos: Producto[];
  constructor(productsService: ProductsService) {
    this.productos = productsService.obtenerProductos();
  }
}
