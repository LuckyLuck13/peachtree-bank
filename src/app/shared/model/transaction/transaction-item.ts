import { Dates } from './dates';
import { Merchant } from './merchant';
import { Transaction } from './transaction';

export class TransactionItem {
  categoryCode: string;
  dates: Dates;
  transaction: Transaction;
  merchant: Merchant;
}
