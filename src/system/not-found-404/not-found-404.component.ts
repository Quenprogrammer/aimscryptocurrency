import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'yex-not-found-404',
  standalone: true,
  imports: [
    RouterLink
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './not-found-404.component.html',
  styleUrl: './not-found-404.component.scss'
})
export class NotFound404Component {

}
