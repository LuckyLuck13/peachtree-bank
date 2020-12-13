import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ControlsModule } from '../controls/controls.module';
import { TransferComponent } from './components/transfer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TransferFormService } from './services/transfer-form.service';
import { MatButtonModule } from '@angular/material/button';
import { DialogsModule } from '../../dialogs/dialogs.module';

const materials = [
  MatDialogModule,
  MatButtonModule,
  MatDialogModule,
]

@NgModule({
  imports: [CommonModule, TranslateModule.forChild(), ControlsModule, DialogsModule, materials],
  declarations: [TransferComponent],
  providers: [TransferFormService],
  exports: [TransferComponent]
})
export class TransferModule { }