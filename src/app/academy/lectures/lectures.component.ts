import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {session1} from "../../../system/DATA/academy/session1";
import {session2} from "../../../system/DATA/academy/session2";
import {session3} from "../../../system/DATA/academy/session3";
import {session4} from "../../../system/DATA/academy/session4";
import {session5} from "../../../system/DATA/academy/session5";
import {session6} from "../../../system/DATA/academy/session6";
import {session7} from "../../../system/DATA/academy/session7";
import {session8} from "../../../system/DATA/academy/session8";

@Component({
  selector: 'app-lectures',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './lectures.component.html',
  styleUrl: './lectures.component.scss'
})
export class LecturesComponent {

  protected readonly session1 = session1;
  protected readonly session2 = session2;
  protected readonly session3 = session3;
  protected readonly session4 = session4;
  protected readonly session5 = session5;
  protected readonly session6 = session6;
  protected readonly session7 = session7;
  protected readonly session8 = session8;
}
