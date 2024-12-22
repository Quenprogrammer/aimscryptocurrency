import { Component, signal } from '@angular/core';

import {News, } from './news';
import {DebugComponent} from "../debug/debug.component";
import {RouterLink} from '@angular/router';
import {NewsCardComponent} from "./news-card/news-card.component";
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    DebugComponent,
    NewsCardComponent,
    RouterLink

  ],
  templateUrl: './tokens.html',
  styleUrl: './tokens.css'
})
export class Tokens {

  protected readonly News = News;

  isLoading = signal(true);

  constructor() {
    setTimeout(() =>{
      this.isLoading.set(false);
    },2000);
  }
}
