import {Component} from '@angular/core';
import {shareSocials} from "../../../../system/DATA/devs/data";

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {

  protected readonly shareSocials = shareSocials;
}
