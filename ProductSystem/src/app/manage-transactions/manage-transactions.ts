import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-transactions',
  imports: [FormsModule],
  templateUrl: './manage-transactions.html',
  styleUrl: './manage-transactions.css'
})
export class ManageTransactions {
  saveTransaction() {
    alert('Transacción guardada: ' + this.detalle);
  }
  typeTransaction: string = ''; // o 'Venta'
  productName: string = '';
  cantidad: number = 0.0;
  precioUnitario: number = 0.0;
  get precioTotal(): number {
    return parseFloat((this.cantidad * this.precioUnitario).toFixed(2));
  }

  get detalle(): string {
    return `${this.typeTransaction} de ${this.cantidad} unidades de ${this.productName}`;
  }
}
