import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionList } from 'src/app/shared/model/transaction/transaction-list';

@Injectable()
export class TransactionService {

  private readonly GET_TRANSACTION_LIST_URL = () => `assets/mock/transactions.json`;

  constructor(private httpClient: HttpClient) { }

  loadTransactionList(): Observable<TransactionList> {
    return this.httpClient.get<TransactionList>(this.GET_TRANSACTION_LIST_URL());
  }
}
