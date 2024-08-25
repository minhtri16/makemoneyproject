import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInch',
  standalone: true,
})
export class ToInchPipe implements PipeTransform {
  transform(value: number, inch: boolean): number {
    let result = value;

    if (inch) {
      result = parseFloat((value / 2.54).toFixed(2));
    }

    return result;
  }
}
