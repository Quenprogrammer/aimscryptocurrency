import { Component } from '@angular/core';
import {ArticlesComponent} from "../../app/articles/articles.component";
import {CreateTokenComponent} from "../../app/platforms/create-token/create-token.component";

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    ArticlesComponent,
    CreateTokenComponent
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {

}
