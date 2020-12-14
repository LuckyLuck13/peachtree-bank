import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionBaseComponent } from './components/transaction-base/transaction-base.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {
    path: '', 
    component: TransactionBaseComponent,
    children: [
      { path: '', component: TransactionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }

