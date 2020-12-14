import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionListComponent } from './components/transaction-list.component';
import { HasLogoPipe } from './pipes/has-logo.pipe';
import { LogoPathPipe } from './pipes/logo-path.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TransactionListComponent, LogoPathPipe, HasLogoPipe],
  providers: [DatePipe],
  exports: [TransactionListComponent]
})
export class TransactionListModule { }
