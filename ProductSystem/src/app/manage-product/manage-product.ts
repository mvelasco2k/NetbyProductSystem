import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria, NewProducto, Producto } from '../main-list/product/product.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-manage-product',
  imports: [FormsModule],
  templateUrl: './manage-product.html',
  styleUrl: './manage-product.css'
})
export class ManageProduct {

  producto = new NewProducto(
    '', '', 0, '', 0, 0
  );

  constructor(private productoService: ProductsService,
    private router: Router
  ) { }

  guardarProducto(evento: Event) {
    evento.preventDefault();

    const nuevoProducto = new NewProducto(
      this.producto.nombre,
      this.producto.descripcion,
      1,
      this.producto.imagen,
      this.producto.precio,
      this.producto.stock
    );
    this.productoService.createProduct(nuevoProducto).subscribe({
      next: (producto: Producto) => {
        this.producto = null!;
        alert('Producto creado: ' + producto.nombre);
        this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Error al crear el producto: ' + error);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/']);
  }
  nombre: string = '';
  precio: number = 0.0;
  descripcion: string = '';
  stock: number = 0;
  imagen: string = '';
}
