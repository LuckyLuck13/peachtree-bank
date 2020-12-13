import { AbstractControl, ValidatorFn } from '@angular/forms';

export class TransferValidatorsService {

  static maxAmountValidator(bankBalanceFn: () => number, maxOverdraft: number): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
        if (TransferValidatorsService.balanceOverdraft(control.value, bankBalanceFn(), maxOverdraft)) {
          return {
            bankBalanceOverdraft: true
          }
        }
        return null;
      };
      return null;
    }
  }

  static balanceOverdraft(amount: number, bankBalance: number, maxOverdraft: number): boolean {
    return amount > bankBalance + (0 - maxOverdraft);
  }

}