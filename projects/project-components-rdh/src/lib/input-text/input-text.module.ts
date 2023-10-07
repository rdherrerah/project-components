import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [InputTextComponent],
  imports: [CommonModule, SharedModule],
  exports: [InputTextComponent],
})
export class InputTextModule {}
