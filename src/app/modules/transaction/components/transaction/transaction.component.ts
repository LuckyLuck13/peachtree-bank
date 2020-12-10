import { Component, OnInit } from '@angular/core';
import { TransactionList } from 'src/app/shared/model/transaction/transaction-list';
import { TransactionFilter } from 'src/app/shared/modules/transaction-filters/model/transaction-filter';
import { TransactionSort } from 'src/app/shared/modules/transaction-filters/model/transaction-sort';
import { SortService } from 'src/app/shared/modules/transaction-filters/services/sort.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionList: TransactionList;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.loadTransactionList(null as any);
  }

  onFilter(filter: TransactionFilter): void {
    this.loadTransactionList(filter);
  }

  onSort(sort: TransactionSort): void {
    SortService.sortTransactions(this.transactionList, sort)
  }

  private loadTransactionList(filter: TransactionFilter): void {
    this.transactionService.loadTransactionList(filter).subscribe(list => {
      this.transactionList = list;
    });
  }

}
