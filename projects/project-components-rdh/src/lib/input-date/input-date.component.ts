import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  @ViewChild('inputDate') inputDate!: ElementRef;
  @Input()
  label: string = '';
  @Input() spanLabel: string = '';
  @Input() id: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = 'dd/mm/yyyy';
  @Input() disabledInput: boolean = false;
  @Input() disabledCalendar: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  fmtDate: string = 'dd/MM/yyyy';

  constructor() {}

  ngOnInit(): void {}

  transformClass(): string[] {
    const classList: string[] = [];
    // Default
    return classList;
  }

  formatingDate(formatDate: string): void {
    const oldDate = this.inputDate.nativeElement.value as string;
    if (oldDate?.length === 8) {
      const day = parseInt(oldDate.substring(0, 2), 10);
      const month = parseInt(oldDate.substring(2, 4), 10);
      const year = parseInt(oldDate.substring(4, 8), 10);
      this.inputDate.nativeElement.value = format(
        new Date(year, month - 1, day),
        formatDate
      );
    }
  }
}
