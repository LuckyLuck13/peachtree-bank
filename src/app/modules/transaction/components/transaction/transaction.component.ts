import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransactionList } from 'src/app/shared/model/transaction/transaction-list';
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
    this.transactionService.loadTransactionList().subscribe(list => {
      this.transactionList = list;
    });
  }

}
