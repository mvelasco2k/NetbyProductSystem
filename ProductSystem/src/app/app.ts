import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainList } from "./main-list/main-list";
import { ManageProduct } from "./manage-product/manage-product";
import { ManageTransactions } from "./manage-transactions/manage-transactions";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainList, ManageProduct, ManageTransactions],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "Hola Mundo";
}
