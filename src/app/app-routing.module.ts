import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'transaction', loadChildren: () => import('./modules/transaction/transaction.module').then(m => m.TransactionModule) },
  { path: '', redirectTo: 'transaction', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
