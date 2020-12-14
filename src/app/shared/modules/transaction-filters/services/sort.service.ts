import { FieldMapper, FieldMapperValue } from 'src/app/shared/model/mapper/field-mapper';
import { TransactionList } from 'src/app/shared/model/transaction/transaction-list';
import { ObjectUtils } from 'src/app/shared/utils/object.utils';
import { SortOrder, SortType, TransactionSort } from '../model/transaction-sort';
import { TransactionSortFields } from '../model/transaction-sort-fields.enum';
import * as moment from 'moment';
import { CreditDebitIndicator } from 'src/app/shared/model/transaction/creditDebitIndicator.enum';

const transactionFieldMapper: FieldMapper<TransactionSortFields> = {
  DATE: ['dates', 'valueDate'],
  BENEFICIARY: ['merchant', 'name'],
  AMOUNT: ['transaction', 'amountCurrency', 'amount']
}

export class SortService {

  static sortTransactions(transactionList: TransactionList, sort: TransactionSort): void {
    transactionList.data.sort((item1, item2) => {
      let a = this.getSortField(item1, transactionFieldMapper[sort.field]);
      let b = this.getSortField(item2, transactionFieldMapper[sort.field]);

      if (sort.order === SortOrder.DESC) {
        [a, b] = [b, a];
      }
      if (sort.type === SortType.NUMBER) {
        if (sort.order === SortOrder.ASC) {
          if (!item1.transaction.creditDebitIndicator || item1.transaction.creditDebitIndicator === CreditDebitIndicator.DBIT) {
            a *= -1;
          }
          if (!item2.transaction.creditDebitIndicator || item2.transaction.creditDebitIndicator === CreditDebitIndicator.DBIT) {
            b *= -1;
          }
        } else {
          if (!item1.transaction.creditDebitIndicator || item1.transaction.creditDebitIndicator === CreditDebitIndicator.DBIT) {
            b *= -1;
          }
          if (!item2.transaction.creditDebitIndicator || item2.transaction.creditDebitIndicator === CreditDebitIndicator.DBIT) {
            a *= -1;
          }
        }
        return a - b;
      }
      if (sort.type === SortType.DATE) {
        return moment(a).diff(b);
      }

      return (a).localeCompare(b);
    });
  }

  private static getSortField(value: any, field: FieldMapperValue): any {
    if (ObjectUtils.isArray(field)) {
      let obj = value;
      field.forEach(v => {
        if (obj[v]) {
          obj = obj[v];
        }
      })
      return obj;
    }
    return value[field];
  }
}