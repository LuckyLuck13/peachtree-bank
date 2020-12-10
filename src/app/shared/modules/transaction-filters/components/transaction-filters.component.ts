import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/abstract/base.component';
import { takeUntil } from 'rxjs/operators';
import { TransactionFilter } from '../model/transaction-filter';

@Component({
  selector: 'app-transaction-filters',
  templateUrl: './transaction-filters.component.html',
  styleUrls: ['./transaction-filters.component.scss']
})
export class TransactionFiltersComponent extends BaseComponent implements OnInit {
  @Output() onFilter = new EventEmitter<TransactionFilter>();
  @Output() onSort = new EventEmitter<TransactionFilter>();

  filterControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setUpFilterControlChange();
  }

  private setUpFilterControlChange(): void {
    this.filterControl.valueChanges
      .pipe(
        takeUntil(this.destroySubject)
      ).subscribe(search => this.onFilter.emit(({ search })));
  }

}
