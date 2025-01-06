import {Component} from '@angular/core';
import {SocialsComponent} from "../socials/socials.component";
import {ItemsCards} from "../../../../system/DATA/devs/data";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    SocialsComponent
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  protected readonly ItemsCards = ItemsCards;
}
