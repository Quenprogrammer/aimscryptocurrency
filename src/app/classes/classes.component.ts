import { Component } from '@angular/core';
import {ClassesCardComponent} from "./classes-card/classes-card.component";

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [
    ClassesCardComponent
  ],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {

}
