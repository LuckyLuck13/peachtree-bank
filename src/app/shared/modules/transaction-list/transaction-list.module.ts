import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionListComponent } from './components/transaction-list.component';
import { LogoPathPipe } from './pipes/logo-path.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TransactionListComponent, LogoPathPipe],
  providers: [DatePipe],
  exports: [TransactionListComponent]
})
export class TransactionListModule { }
