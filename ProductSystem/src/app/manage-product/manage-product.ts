import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  imports: [FormsModule],
  templateUrl: './manage-product.html',
  styleUrl: './manage-product.css'
})
export class ManageProduct {
  saveProduct() {
    alert('Producto guardado: ' + this.nombre);
  }
  nombre: string = '';
  precio: number = 0.0;
  descripcion: string = '';
  stock: number = 0;
  imagen: string = '';
}
