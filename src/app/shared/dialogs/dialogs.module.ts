import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { TranslateModule } from "@ngx-translate/core";
import { TransferPreviewComponent } from "./transfer-preview/transfer-preview.component";

const components = [
  TransferPreviewComponent
];

const material = [
  MatButtonModule
]

@NgModule({
  imports: [CommonModule, TranslateModule.forChild(), material],
  declarations: [components],
  exports: [components]
})
export class DialogsModule {

}