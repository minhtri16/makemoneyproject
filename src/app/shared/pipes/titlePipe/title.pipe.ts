import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true,
})
export class TitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return ' ';
    }
    return value.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }
}
