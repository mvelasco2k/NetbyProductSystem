import { Component } from '@angular/core';
import { Product } from "./product/product";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-list',
  imports: [Product, RouterModule],
  templateUrl: './main-list.html',
  styleUrl: './main-list.css'
})
export class MainList {

  constructor(private router: Router) { }

  newTransaction() {
    this.router.navigate(['manage-transactions']);
  }
  addProduct() {
    this.router.navigate(['manage-product']);
  }
  protected readonly titleSystem = "Sistema de Gestión de Productos";
}
