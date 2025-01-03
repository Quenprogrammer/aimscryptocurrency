import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {articles} from "../../system/DATA/articles/articles";


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


  protected readonly articles = articles;
}















