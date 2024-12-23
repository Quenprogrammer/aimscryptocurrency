import {Component, OnInit} from '@angular/core';
import {TokenService} from "../token.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sell-token',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sell-token.component.html',
  styleUrl: './sell-token.component.scss'
})
export class SellTokenComponent implements OnInit{
  amount: number=0;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  sell(): void {
    this.tokenService.sellToken(this.amount);
  }


}
