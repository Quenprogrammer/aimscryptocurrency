import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";


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















