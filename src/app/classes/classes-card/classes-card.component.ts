import { Component } from '@angular/core';
import {TruncateTextPipe} from "../../../shared/truncate-text-pipe/truncate-text.pipe";

import {allClasses} from "./classesOfSchool";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-classes-card',
  standalone: true,
  imports: [
    TruncateTextPipe,
    NgForOf
  ],
  templateUrl: './classes-card.component.html',
  styleUrl: './classes-card.component.scss'
})
export class ClassesCardComponent {

  protected readonly allClasses = allClasses;
}
