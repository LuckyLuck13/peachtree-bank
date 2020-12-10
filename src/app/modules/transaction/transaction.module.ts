import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionService } from './services/transaction.service';
import { TransactionListModule } from 'src/app/shared/modules/transaction-list/transaction-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { TransactionFiltersModule } from 'src/app/shared/modules/transaction-filters/transaction-filters.module';

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    TransactionListModule,
    TranslateModule.forChild(),
    TransactionFiltersModule,
  ],
  providers: [TransactionService, DatePipe]
})
export class TransactionModule { }
