import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {allArticlesToken} from "../../../system/DATA/tokenCreation/guideToCreateToken";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-create-token',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './create-token.component.html',
  styleUrl: './create-token.component.scss'
})
export class CreateTokenComponent {

  protected readonly allArticlesToken = allArticlesToken;
}
