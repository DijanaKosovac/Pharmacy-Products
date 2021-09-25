import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDate'
})
export class ParseDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: any): unknown {
    if (value) {
      value = this.datePipe.transform(value.toDate(), 'dd.MM.yyyy');
    }
    return value;
  }

}
