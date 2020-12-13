import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transfer } from '../model/transfer';
import { TransferValidatorsService } from './transfer-validators.service';
import { TransferService } from './transfer.service';

@Injectable()
export class TransferFormService {

  constructor(private transferService: TransferService) { }

  createTransferFormGroup(transfer?: Transfer): FormGroup {
    return new FormGroup({
      from: new FormControl(transfer ? transfer.from : null,),
      to: new FormControl(transfer ? transfer.to : null, Validators.required),
      amount: new FormControl(transfer ? transfer.amount : null, [
        Validators.required,
        Validators.min(0.01),
        TransferValidatorsService.maxAmountValidator(() => this.transferService.bankBalance, this.transferService.maxOverdraft),
      ])
    });
  }
}