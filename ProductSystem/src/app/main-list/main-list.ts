import { Component } from '@angular/core';
import { Product } from "./product/product";

@Component({
  selector: 'app-main-list',
  imports: [Product],
  templateUrl: './main-list.html',
  styleUrl: './main-list.css'
})
export class MainList {
  newTransaction() {
    alert('Nueva transacción iniciada');
  }
  addProduct() {
    alert('Nuevo producto añadido');
  }
  protected readonly titleSystem = "Sistema de Gestión de Productos";
}
