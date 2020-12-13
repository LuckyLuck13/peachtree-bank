import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Const } from 'src/app/shared/model/const';
import { TransactionItem } from 'src/app/shared/model/transaction';
import { CreditDebitIndicator } from 'src/app/shared/model/transaction/creditDebitIndicator.enum';
import { TransactionList } from 'src/app/shared/model/transaction/transaction-list';
import { TransactionFilter } from 'src/app/shared/modules/transaction-filters/model/transaction-filter';
import { Transfer } from 'src/app/shared/modules/transfer/model/transfer';
import * as moment from 'moment';

@Injectable()
export class TransactionService {

  private readonly GET_TRANSACTION_LIST_URL = () => `assets/mock/transactions.json`;
  private transactionList: TransactionList;

  constructor(private httpClient: HttpClient) { }

  loadTransactionList(filter: TransactionFilter): Observable<TransactionList> {
    return this.getTransactionList()
      .pipe(
        map(ts => {
          if (this.hasFilters(filter)) {
            const filteredElements = ts.data.filter(item => this.filterItem(item, filter));
            return {
              ...ts,
              data: filteredElements
            }
          }
          return ts;
        })
      )
  }

  addTransaction(list: TransactionList, transfer: Transfer): void {
    list.data.push(this.convertToTransactionItem(transfer));
  }

  private convertToTransactionItem(transfer: Transfer): TransactionItem {
    return {
      categoryCode: '#919191',
      dates: {
        valueDate: moment().format('YYYY-MM-DD')
      },
      merchant: {
        accountNumber: '827432874283749823749',
        name: transfer.to
      },
      transaction: {
        amountCurrency: {
          amount: transfer.amount,
          currencyCode: Const.amountCurrency
        },
        creditDebitIndicator: CreditDebitIndicator.DBIT,
        type: 'Card Payment'
      }
    }
  }

  private getTransactionList(): Observable<TransactionList> {
    if (this.transactionList) {
      return of(this.transactionList)
    }
    return this.requestTransactionList();
  }

  private requestTransactionList(): Observable<TransactionList> {
    return this.httpClient.get<TransactionList>(this.GET_TRANSACTION_LIST_URL())
      .pipe(
        tap(list => this.transactionList = list),
      );
  }

  private filterItem(item: TransactionItem, filter: TransactionFilter): boolean {
    return item.merchant.name.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase());
  }

  private hasFilters(filter: TransactionFilter): boolean {
    return filter && !!filter.search;
  }

}
