import {Component, input} from '@angular/core';
import {Article, News} from "../news";
import {TruncateTextPipe} from "../../../pipes/truncate-text.pipe";

import {RouterLink} from '@angular/router';
@Component({
    selector: 'app-news-card',
    standalone: true,
  imports: [

    RouterLink,
      TruncateTextPipe
  ],
    templateUrl: './news-card.component.html',
    styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  newsArticle = input.required< Article>();
  protected readonly News = News;
}
