import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
interface ArticleSection {
  title: string;
  content?: string;
  description?: string;
  commands?: string;
  code?: string;
  subSections?: { title: string, content: string }[];
  listItems?: string[];
}
@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {


}















