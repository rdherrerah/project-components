import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { DEFAULT_MESSAGE, ERRORS } from '../../shared/enum/Errors';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() caseMm: string | ['mm', 'MM', 'Mm', ''] = '';
  @Input() value: string = '';
  @Input() formControlName: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() closeOption: boolean = false;
  @Input() readonlyPlainText: boolean = false;
  control: FormControl = new FormControl('');

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      const formGroup = this.controlContainer.control;
      this.control = formGroup?.get(this.formControlName) as FormControl;
    }
  }

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  transformClass(): string[] {
    const classList: string[] = [];
    // Default
    classList.push(this.caseMm as string);
    return classList;
  }

  getErrors(): string[] {
    let errors: ValidationErrors;
    if (this.control?.errors) {
      errors = this.control.errors;
      return Object.keys(errors).map((errorKey) => {
        if (Object.keys(ERRORS).includes(errorKey)) {
          return ERRORS[errorKey].message(this.label, errors[errorKey]);
        } else return DEFAULT_MESSAGE(this.label);
      });
    }
    return [];
  }
  clearValue(): void {}
}
