import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() format: string | ['mm', 'MM', 'Mm', ''] = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() readonlyPlainText: boolean = false;

  transformClass(): string[] {
    const classList: string[] = [];
    // Default
    classList.push(this.format as string);
    classList.push(this._setClassForFormControl());
    return classList;
  }

  private _setClassForFormControl(): string {
    if (this.readonlyPlainText) {
      this.readonly = true;
      return 'form-control-plaintext';
    }
    return 'form-control';
  }

  constructor() {}

  ngOnInit(): void {}
}
