import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogResult } from '../model/dialog-result';
import { TransferPreviewData } from '../model/transfer-preview-data';

@Component({
  selector: 'app-transfer-preview',
  templateUrl: './transfer-preview.component.html',
  styleUrls: ['./transfer-preview.component.scss',
              '../../../../assets/styles/_modal.scss']
})
export class TransferPreviewComponent implements OnInit {

  dialogResult = DialogResult;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TransferPreviewData,
              private dialogRef: MatDialogRef<TransferPreviewComponent>) { }

  ngOnInit(): void { }

  close(result: DialogResult): void {
    this.dialogRef.close(result);
  }

}
