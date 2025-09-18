import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionModel } from './manage-transactions/transaction.model';
import { Observable } from 'rxjs';
import { Producto } from './main-list/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private readonly apiUrl = 'http://localhost:5163/api/Transactions/';

  constructor(private http: HttpClient) { }

  newTransaction(transaction: TransactionModel): Observable<Producto>  {
    return this.http.put<Producto>(`${this.apiUrl}TransactionProducts`, transaction);
  }
}
