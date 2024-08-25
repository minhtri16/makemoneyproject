import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue',
  standalone: true,
})
export class KeyValuePipe implements PipeTransform {
  transform(value: any): any[] {
    const keys = Object.keys(value);
    return keys.map((key) => ({ key: key, value: value[key] }));
  }
}
