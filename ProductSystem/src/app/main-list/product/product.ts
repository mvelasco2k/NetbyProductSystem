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

  venderProducto(id: number) {
    this.router.navigate(['manage-transactions', 'VENTA', id]);
  }
  comprarProducto(id: number) {
    this.router.navigate(['manage-transactions', 'COMPRA', id]);
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }

  ///PAGINATION 
  currentPage: number = 1;
  itemsPerPage: number = 5;

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.productos.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.productos.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
