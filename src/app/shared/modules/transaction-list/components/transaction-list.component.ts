import { Component, Input, OnInit } from '@angular/core';
import { CreditDebitIndicator } from 'src/app/shared/model/transaction/creditDebitIndicator.enum';
import { TransactionList } from 'src/app/shared/model/transaction/transaction-list';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Input() set transactionList(ts: TransactionList) {
    this.list = ts;
  }

  list: TransactionList;
  creditDebitIndicator = CreditDebitIndicator;

  constructor() { }

  ngOnInit(): void {
  }

}
