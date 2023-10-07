import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [InputNumberComponent],
  imports: [CommonModule, SharedModule],
  exports: [InputNumberComponent],
})
export class InputNumberModule {}
