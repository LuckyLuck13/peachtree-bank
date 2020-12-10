import { TransactionSortFields } from './transaction-sort-fields.enum';

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum SortType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE'
}

export class TransactionSort {
  order: SortOrder;
  field: TransactionSortFields;
  type: SortType;

  constructor() {
    this.order = SortOrder.ASC;
  }
}