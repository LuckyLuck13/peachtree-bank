import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionService } from './services/transaction.service';
import { TransactionListModule } from 'src/app/shared/modules/transaction-list/transaction-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { TransactionFiltersModule } from 'src/app/shared/modules/transaction-filters/transaction-filters.module';
import { TransferModule } from 'src/app/shared/modules/transfer/transfer.module';
import { TransferService } from 'src/app/shared/modules/transfer/services/transfer.service';

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    TransactionListModule,
    TranslateModule.forChild(),
    TransactionFiltersModule,
    TransferModule,
  ],
  providers: [TransactionService, DatePipe, TransferService]
})
export class TransactionModule { }
