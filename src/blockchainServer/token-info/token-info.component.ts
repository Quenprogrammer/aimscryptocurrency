import {Component, OnInit} from '@angular/core';
import {TokenService,Token} from "../token.service";

import {DecimalPipe} from "@angular/common";


@Component({
  selector: 'app-token-info',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './token-info.component.html',
  styleUrl: './token-info.component.scss'
})
export class TokenInfoComponent implements OnInit{

  token?: Token;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
  }


}
