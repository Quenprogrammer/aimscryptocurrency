import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newlineToHtml',
  standalone: true
})
export class NewlineToHtmlPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value) return ''; // Return empty string if value is undefined or null

    // First, replace double asterisks with <strong> for bold
    let htmlValue = value.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Then, replace newline characters with <br> tags
    htmlValue = htmlValue.replace(/\n/g, '<br>');

    // Wrap the content in a div and apply text alignment
    htmlValue = `<div style="text-align: justify;">${htmlValue}</div>`;

    return htmlValue;
  }

}
