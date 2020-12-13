import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/abstract/base.component';
import { Const } from 'src/app/shared/model/const';
import { Transfer } from '../model/transfer';
import { TransferFormService } from '../services/transfer-form.service';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent extends BaseComponent implements OnInit {

  transferForm: FormGroup;
  amountSign = Const.amountSign;

  constructor(private transferFormService: TransferFormService, private transferService: TransferService) { 
    super();
  }

  ngOnInit(): void {
    this.transferForm = this.transferFormService.createTransferFormGroup(this.getTransferInitValue());
    (this.transferForm.get('from') as FormControl).disable();
    this.setUpTransferListener();
  }

  submitTransfer(): void {
    this.transferService.makeTransfer(this.transferForm);
  }

  get fromControl(): FormControl {
    return this.transferForm.get('from') as FormControl;
  }

  get toControl(): FormControl {
    return this.transferForm.get('to') as FormControl;
  }

  get amountControl(): FormControl {
    return this.transferForm.get('amount') as FormControl;
  }

  private getTransferInitValue(): Transfer {
    return {
      from: `Free Checking(4692) - ${Const.amountSign}${this.transferService.bankBalance}`,
      to: 'Georgia Power Electric Company',
      amount: 0
    }
  }

  private setUpTransferListener(): void {
    this.transferService.transferObs
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.transferForm.setValue(this.getTransferInitValue());
        this.transferForm.markAsPristine();
      });
  }

}
