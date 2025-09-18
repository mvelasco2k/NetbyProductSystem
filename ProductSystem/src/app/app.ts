import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainList } from "./main-list/main-list";
import { ManageProduct } from "./manage-product/manage-product";
import { ManageTransactions } from "./manage-transactions/manage-transactions";
import { NavigationBar } from "./navigation-bar/navigation-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainList, ManageProduct, ManageTransactions, RouterModule, NavigationBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "Hola Mundo";
}
