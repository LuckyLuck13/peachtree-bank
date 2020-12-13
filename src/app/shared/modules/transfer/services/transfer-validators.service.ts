import { AbstractControl, ValidatorFn } from '@angular/forms';
import { NumberUtils } from 'src/app/shared/utils/number-utils';

export class TransferValidatorsService {

  static maxAmountValidator(bankBalanceFn: () => number, maxOverdraft: number): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
        if (NumberUtils.balanceOverdraft(control.value, bankBalanceFn(), maxOverdraft)) {
          return {
            bankBalanceOverdraft: true
          }
        }
        return null;
      };
      return null;
    }
  }

}