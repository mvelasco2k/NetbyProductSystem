import { Component } from '@angular/core';
import { Producto } from './product.model';
import { ProductsService } from '../../products-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
editarProducto(_t15: Producto) {
throw new Error('Method not implemented.');
}
eliminarProducto(_t15: Producto) {
throw new Error('Method not implemented.');
}

  productos: Producto[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe({
      next: (productos: Producto[]) => {
        this.productos = productos;
        console.log('Productos cargados:', this.productos);
      },
      error: (err) => {
        console.error('Error al traer productos:', err);
      }
    });
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }
}
