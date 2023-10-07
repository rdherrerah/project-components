import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  forwardRef,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { DEFAULT_MESSAGE, ERRORS } from '../../shared/enum/Errors';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true,
    },
  ],
})
export class InputNumberComponent implements OnInit, ControlValueAccessor {
  @ViewChild('inputNumber') inputNumber!: ElementRef;

  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() label: string | null = '';
  @Input() value: string = '';
  @Input() formControlName: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() closeOption: boolean = false;
  @Input() decimal: number = 0;
  @Input() readonlyPlainText: boolean = false;

  private _pattern: string = '';
  formatPattern = (dec: number) =>
    `^\\d*${dec === 0 ? '' : '\\.?'}\\d{0,${dec}}$`;

  control: FormControl = new FormControl('');

  constructor(private controlContainer: ControlContainer) {
    this._pattern = this.formatPattern(this.decimal);
  }

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

  formatingNumber(): void {
    this._pattern = this.formatPattern(this.decimal);
    let value = this.inputNumber.nativeElement.value as string;
    const reg = new RegExp(this._pattern);
    if (!RegExp(reg).exec(value))
      value = value.length === 1 ? '' : value.substring(0, value.length - 1);
    this.inputNumber.nativeElement.value = value;
  }

  transformClass(): string[] {
    const classList: string[] = [];
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
