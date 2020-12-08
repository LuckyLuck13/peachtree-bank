import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  { path: '', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TransactionRoutingModule { }

