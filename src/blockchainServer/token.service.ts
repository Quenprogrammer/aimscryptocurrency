import { Injectable } from '@angular/core';

export interface Token {
  name?: string;
  symbol: string;
  price: number;
  marketCap: number;
  circulatingSupply: number;
  totalSupply: number;
}
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: Token = {
    name: 'MyToken',
    symbol: 'MTK',
    price: 10.0,
    marketCap: 1000000.0,
    circulatingSupply: 100000.0,
    totalSupply: 1000000.0
  };

  getToken(): Token {
    return this.token;
  }

  buyToken(amount: number): void {
    this.token.circulatingSupply += amount;
    this.token.marketCap = this.token.price * this.token.circulatingSupply;
  }

  sellToken(amount: number): void {
    this.token.circulatingSupply -= amount;
    this.token.marketCap = this.token.price * this.token.circulatingSupply;
  }

  updatePrice(price: number): void {
    this.token.price = price;
    this.token.marketCap = this.token.price * this.token.circulatingSupply;
  }

}
