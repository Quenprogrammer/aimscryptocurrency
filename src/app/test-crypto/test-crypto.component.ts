import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CurrencyPipe, NgForOf, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-test-crypto',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    HttpClientModule,
    UpperCasePipe,
    NgForOf,
    // Ensure HttpClientModule is properly imported
  ],
  templateUrl: './test-crypto.component.html',
  styleUrls: ['./test-crypto.component.scss']
})
export class TestCryptoComponent implements OnInit {
  // Dynamic object to store the crypto prices along with images
  cryptoPrices: { [key: string]: { price: number | null; imageUrl: string | null } } = {};
  error: string | null = null;
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCryptoPrices();
  }

  fetchCryptoPrices(): void {
    this.isLoading = true;
    // Fetch the first 50 cryptocurrencies using CoinGecko's /coins/markets endpoint
    this.http
      .get<any[]>(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',  // Sort by market cap
            per_page: '70',  // Get the first 50 cryptocurrencies
            page: '1',  // Fetch first page
          }
        }
      )
      .subscribe({
        next: (data: any[]) => {
          // Map the response to the cryptoPrices object, including images
          this.cryptoPrices = data.reduce((acc, coin) => {
            acc[coin.id] = {
              price: coin.current_price || null,
              imageUrl: coin.image || null,  // Get the image URL
            };
            return acc;
          }, {});
          this.error = null;
          this.isLoading = false;
        },
        error: (err: any) => {
          this.error = 'Failed to fetch cryptocurrency prices. Please try again later.';
          console.error('Error fetching cryptocurrency prices:', err);
          this.isLoading = false;
        }
      });
  }

  // Utility function to get the keys of the object
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
