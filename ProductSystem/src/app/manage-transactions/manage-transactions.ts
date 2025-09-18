import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewProducto } from '../main-list/product/product.model';
import { ProductsService } from '../products-service';
import { TransactionModel } from './transaction.model';
import { TransactionsService } from '../transactions-service';

@Component({
  selector: 'app-manage-transactions',
  imports: [FormsModule],
  templateUrl: './manage-transactions.html',
  styleUrl: './manage-transactions.css'
})
export class ManageTransactions {

  producto = new NewProducto(
    '', '', 0, '', 0, 0
  );
  typeTransaction: string = ''; // o 'Venta'
  idProducto: number = 0;

  constructor(private router: Router, 
    private productoService: ProductsService, 
    private route: ActivatedRoute,
    private transactionsService: TransactionsService) { 

    const id = this.route.snapshot.paramMap.get('id');
    const compra = this.route.snapshot.paramMap.get('transaction');
    if (id && compra) {
      this.typeTransaction = compra;
      this.idProducto = +id;
      this.productoService.getProductById(+id).subscribe({
        next: (producto: NewProducto) => {
          this.producto = producto;
        },
        error: (error) => {
          alert('Error al traer el producto: ' + error.error);
          this.router.navigate(['/']);
        }
      });
    }
  }
  
  cantidad: number = 0.0;
  precioTotal: number = 0.0;

  get calcularPrecioTotal(): number {
    return parseFloat((this.cantidad * this.producto.precio).toFixed(2));
  }

  cancelar() {
    this.router.navigate(['/']);
  }

  guardarTransaccion(evento: Event) {
    evento.preventDefault();

    const transaction = new TransactionModel(
      this.idProducto,
      this.cantidad,
      this.typeTransaction,
      `${this.typeTransaction} de ${this.cantidad} unidades de ${this.producto.nombre}`
    );
    
    this.transactionsService.newTransaction(transaction).subscribe({
      next: (producto: NewProducto) => {
        alert(`Transacción de ${this.cantidad} unidades de ${this.producto.nombre} realizada con éxito.`);
        this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Error al realizar la transacción: ' + error.error);
      }
    });
  }
}
