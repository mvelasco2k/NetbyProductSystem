import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria, EditProducto, NewProducto, Producto } from '../main-list/product/product.model';
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
  id: number = 0;

  constructor(private productoService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.productoService.getProductById(this.id).subscribe({
        next: (producto: Producto) => {
          this.producto = producto;
        },
        error: (error) => {
          alert('Error al traer el producto: ' + error);
          this.router.navigate(['/']);
        }
      });
    }
  }

  guardarProducto(evento: Event) {
    evento.preventDefault();

    if (this.id) {
      this.editarProducto();
    } else {
      this.crearProducto();
    }
  }

  crearProducto() {
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

  editarProducto() {
    const productoEditado = new EditProducto(
      this.id,
      this.producto.nombre,
      this.producto.descripcion,
      1,
      this.producto.imagen,
      this.producto.precio,
      this.producto.stock
    );
    this.productoService.editProduct(productoEditado).subscribe({
      next: (producto: Producto) => {
        this.producto = null!;
        alert('Producto editado: ' + producto.nombre);
        this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Error al editar el producto: ' + error);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
