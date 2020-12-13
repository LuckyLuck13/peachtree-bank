import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { TransferPreviewData } from '../model/transfer-preview-data';
import { TransferPreviewComponent } from './transfer-preview.component';

const transferPreviewData: TransferPreviewData = {
  title: 'title 1',
  transfer: {
    from: 'from customer',
    to: 'to bank acount',
    amount: 12
  }
}

describe('TransferPreviewComponent', () => {
  let component: TransferPreviewComponent;
  let fixture: ComponentFixture<TransferPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TransferPreviewComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: transferPreviewData },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
