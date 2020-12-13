import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormErrorPipe } from './form-error.pipe';

const pipes = [
  FormErrorPipe
]

@NgModule({
  imports: [CommonModule, TranslateModule.forChild()],
  declarations: [pipes],
  exports: [pipes]
})
export class PipesModule {

}