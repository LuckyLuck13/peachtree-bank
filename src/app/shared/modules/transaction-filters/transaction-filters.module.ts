import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionFiltersComponent } from './components/transaction-filters.component';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  imports: [CommonModule, ControlsModule],
  declarations: [TransactionFiltersComponent],
  exports: [TransactionFiltersComponent]
})
export class TransactionFiltersModule { }