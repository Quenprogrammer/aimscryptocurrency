import {OnInit, Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'appTimeDisplay',
  standalone: true
})
export class AppTimeDisplayPipe  implements PipeTransform {

  transform(value: any, format: string = 'EEEE d MMMM yyyy h:mm:ss'): any {
    if (value) {
      // Create a new Date object
      const date = new Date(value);

      // Use `toLocaleString` or custom formatting logic for date, but since you want more flexibility,
      // we can format it manually or use a library like `date-fns` or `moment.js`.

      // Custom formatting logic to handle the milliseconds and AM/PM format
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', // Full weekday name (e.g., Monday)
        day: 'numeric',  // Day of the month (e.g., 26)
        month: 'long',   // Full month name (e.g., January)
        year: 'numeric', // Year (e.g., 2024)
        hour: 'numeric', // Hour in 12-hour format
        minute: 'numeric', // Minute
        second: 'numeric', // Second
        hour12: true,     // Use AM/PM format

      };

      return date.toLocaleString('en-US', options);
    }
    return '';
  }
}
