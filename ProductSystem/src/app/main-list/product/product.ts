import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  private description = 'Producto de ejemplo';
  private price = 100.00;

  get getTitle(): string {
    return this.description;
  }

  get getPrice(): number {
    return this.price;
  }
}
