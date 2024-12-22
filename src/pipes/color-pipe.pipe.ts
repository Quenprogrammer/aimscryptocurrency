import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorPipe',
  standalone: true
})
export class ColorPipePipe implements PipeTransform {

  transform(value: number): string {
    return value < 0 ? 'green' : 'red';
  }


}
