import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Transfer } from '../model/transfer';
import { TransferValidatorsService } from './transfer-validators.service';

@Injectable()
export class TransferService {

  bankBalance = 5824.76;
  readonly maxOverdraft = -500;

  private transferSubject = new Subject<Transfer>();
  transferObs = this.transferSubject.asObservable();

  constructor() {}

  makeTransfer(transferFormGroup: FormGroup) {
    const transfer: Transfer = transferFormGroup.getRawValue();
    if (this.canMakeTransfer(transfer, transferFormGroup)) {
      this.bankBalance -= transfer.amount;
      this.transferSubject.next(transfer);
    } else {
      transferFormGroup.markAllAsTouched();
    }
  }

  private canMakeTransfer(transfer: Transfer, group: FormGroup): boolean {
    return group.valid && !TransferValidatorsService.balanceOverdraft(transfer.amount, this.bankBalance, this.maxOverdraft);
  }
  
}