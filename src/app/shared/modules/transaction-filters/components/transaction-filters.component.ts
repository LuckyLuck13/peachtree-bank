import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/abstract/base.component';
import { takeUntil } from 'rxjs/operators';
import { SortOrder, TransactionFilter } from '../model/transaction-filter';
import { SortType, TransactionSort } from '../model/transaction-sort';
import { TransactionSortFields } from '../model/transaction-sort-fields.enum';

@Component({
  selector: 'app-transaction-filters',
  templateUrl: './transaction-filters.component.html',
  styleUrls: ['./transaction-filters.component.scss']
})
export class TransactionFiltersComponent extends BaseComponent implements OnInit {
  @Output() onFilter = new EventEmitter<TransactionFilter>();
  @Output() onSort = new EventEmitter<TransactionSort>();

  filterControl = new FormControl();
  sort = new TransactionSort();
  sortOrder = SortOrder;
  sortFields = TransactionSortFields;
  sortType = SortType;
  
  private lastSortField: TransactionSortFields;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setUpFilterControlChange();
  }

  sortByField(field: TransactionSortFields, type: SortType): void {
    this.setSortOrder(field);
    this.emitSort(({ ...this.sort, field, type }))
  }

  sortByDate(order: SortOrder): void {
    this.emitSort(({ field: this.sortFields.DATE, order, type: SortType.DATE }))
  }

  private setUpFilterControlChange(): void {
    this.filterControl.valueChanges
      .pipe(
        takeUntil(this.destroySubject)
      ).subscribe(search => this.onFilter.emit(({ search })));
  }

  private emitSort(sort: TransactionSort): void {
    this.sort = sort;
    this.onSort.emit(this.sort);
  }

  private setSortOrder(field: TransactionSortFields): void {
    if (this.lastSortField === field) {
      this.changeSortOrder();
    }
    this.lastSortField = field;
  }

  private changeSortOrder(): void {
    if (this.sort.order === SortOrder.ASC) {
      this.sort.order = SortOrder.DESC;
    } else {
      this.sort.order = SortOrder.ASC;
    }
  }

}
