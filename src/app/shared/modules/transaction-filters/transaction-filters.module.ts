import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionFiltersComponent } from './components/transaction-filters.component';
import { ControlsModule } from '../controls/controls.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

const materials = [
  MatMenuModule,
  MatButtonModule
]

@NgModule({
  imports: [CommonModule, TranslateModule.forChild(), ControlsModule, materials],
  declarations: [TransactionFiltersComponent],
  exports: [TransactionFiltersComponent]
})
export class TransactionFiltersModule { }