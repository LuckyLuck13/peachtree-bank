import { Component, Input, OnInit } from '@angular/core';
import { TransactionItem } from 'src/app/shared/model/transaction';
import { CreditDebitIndicator } from 'src/app/shared/model/transaction/creditDebitIndicator.enum';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Input() set transactionItems(transactionItems: TransactionItem[]) {
    this.items = transactionItems;
  }

  items: TransactionItem[];
  creditDebitIndicator = CreditDebitIndicator;

  constructor() { }

  ngOnInit(): void {
  }

}
