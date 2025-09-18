import { Component } from '@angular/core';
import { Producto } from './product.model';
import { ProductsService } from '../../products-service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  

  productos: Producto[] = [];
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe({
      next: (productos: Producto[]) => {
        this.productos = productos;
      },
      error: (err) => {
        console.error('Error al traer productos:', err);
      }
    });
  }

  editarProducto(producto: Producto) {
    this.router.navigate(['manage-product', producto.id]);
  }

  eliminarProducto(id: number) {
    const confirmado = window.confirm('¿Está seguro de que desea eliminar este producto?');
    if (!confirmado) return;
    this.productsService.deleteProduct(id).subscribe({
      next: () => {
        alert('Producto eliminado');
        this.productos = this.productos.filter(p => p.id !== id);
      },
      error: (err) => {
        console.error('Error al eliminar producto:', err);
      }
    });
  }

  venderProducto(arg0: number) {
    throw new Error('Method not implemented.');
  }
  comprarProducto(_t16: Producto) {
    throw new Error('Method not implemented.');
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }
}
