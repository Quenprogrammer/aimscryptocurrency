import {Component, OnInit} from '@angular/core';
import {TokenService} from "../token.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-buy-token',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './buy-token.component.html',
  styleUrl: './buy-token.component.scss'
})
export class BuyTokenComponent implements OnInit{
  amount: number=0;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  buy(): void {
    this.tokenService.buyToken(this.amount);
    console.log(this.amount);
  }


}
