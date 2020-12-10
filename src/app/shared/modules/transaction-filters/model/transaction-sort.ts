export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export class TransactionSort {
  order: SortOrder;
  field: string;
}