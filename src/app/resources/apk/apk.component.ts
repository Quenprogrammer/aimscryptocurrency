import { Component } from '@angular/core';
import {googlePlayApps} from "../../../system/DATA/andriodApps/apkApps";

@Component({
  selector: 'app-apk',
  standalone: true,
  imports: [],
  templateUrl: './apk.component.html',
  styleUrl: './apk.component.scss'
})
export class ApkComponent {

  protected readonly googlePlayApps = googlePlayApps;
}
