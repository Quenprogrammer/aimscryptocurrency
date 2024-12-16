import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, DecimalPipe, NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-crypto',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    HttpClientModule,
    UpperCasePipe,
    NgForOf,
    DecimalPipe,
  ],
  templateUrl: './test-crypto.component.html',
  styleUrls: ['./test-crypto.component.scss']
})
export class TestCryptoComponent implements OnInit, OnDestroy {
  // Dynamic object to store the crypto prices, images, market cap, rank, and additional fields
  cryptoPrices: {
    [key: string]: {
      price: number | null;
      imageUrl: string | null;
      marketCap: number | null;
      rank: number | null;
      circulatingSupply: number | null;
      totalSupply: number | null;
      fullyDilutedValuation: number | null;
    };
  } = {};

  // Array to store the top 3 cryptocurrencies based on market cap
  top3Crypto: any[] = [];

  // Array to store the specific cryptocurrencies (e.g., ALGO, TRX, SOL)
  specificCrypto: any[] = [];

  error: string | null = null;
  isLoading = false;
  lastUpdated: string | null = null; // Store the last update timestamp

  private priceUpdateSubscription: Subscription | null = null; // To hold the subscription for interval updates

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCryptoPrices();  // Fetch top 3 cryptocurrencies
    this.fetchSpecificCryptoPrices(['algo', 'tron', 'solana']); // Fetch specific tokens (ALGO, TRX, SOL)
    this.startPriceUpdates();  // Start periodic price updates
  }

  ngOnDestroy(): void {
    if (this.priceUpdateSubscription) {
      this.priceUpdateSubscription.unsubscribe();  // Unsubscribe when the component is destroyed
    }
  }

  // Function to fetch the top 3 cryptocurrencies based on market cap
  fetchCryptoPrices(): void {
    this.isLoading = true;
    // Fetch the first 70 cryptocurrencies using CoinGecko's /coins/markets endpoint
    this.http
      .get<any[]>(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',  // Sort by market cap
            per_page: '3',  // Get the top 3 cryptocurrencies
            page: '1',  // Fetch first page
          }
        }
      )
      .subscribe({
        next: (data: any[]) => {
          // Map the response to the cryptoPrices object
          this.cryptoPrices = data.reduce((acc, coin) => {
            acc[coin.id] = {
              price: coin.current_price || null,
              imageUrl: coin.image || null,  // Get the image URL
              marketCap: coin.market_cap || null,  // Get the market cap
              rank: coin.market_cap_rank || null,  // Get the rank
              circulatingSupply: coin.circulating_supply || null,  // Get the circulating supply
              totalSupply: coin.total_supply || null,  // Get the total supply
              fullyDilutedValuation: coin.fully_diluted_valuation || null,  // Get the fully diluted valuation
            };
            return acc;
          }, {});

          // Store the top 3 cryptocurrencies
          this.top3Crypto = data;

          // Log "Price updated" after data is fetched
          console.log('Price updated');

          // Set the last updated timestamp
          this.lastUpdated = new Date().toLocaleString();

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

  // Function to fetch prices for specific tokens (e.g., ALGO, TRX, SOL)
  fetchSpecificCryptoPrices(tokens: string[]): void {
    this.isLoading = true;

    // Prepare a query parameter for the specific coins
    const ids = tokens.join(',');  // Convert the tokens array to a comma-separated string

    // Fetch the specific coins from the CoinGecko API
    this.http
      .get<any[]>(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: 'usd',
            ids: ids,  // Pass specific coin IDs
          }
        }
      )
      .subscribe({
        next: (data: any[]) => {
          // Map the response to the cryptoPrices object for the specific coins
          this.cryptoPrices = data.reduce((acc, coin) => {
            acc[coin.id] = {
              price: coin.current_price || null,
              imageUrl: coin.image || null,  // Get the image URL
              marketCap: coin.market_cap || null,  // Get the market cap
              rank: coin.market_cap_rank || null,  // Get the rank
              circulatingSupply: coin.circulating_supply || null,  // Get the circulating supply
              totalSupply: coin.total_supply || null,  // Get the total supply
              fullyDilutedValuation: coin.fully_diluted_valuation || null,  // Get the fully diluted valuation
            };
            return acc;
          }, {});

          // Store the specific cryptocurrencies in the specificCrypto array
          this.specificCrypto = data;

          // Log "Price updated" after data is fetched
          console.log('Price updated');

          // Set the last updated timestamp
          this.lastUpdated = new Date().toLocaleString();

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

  // Start polling for new prices every 60 seconds (or another interval)
  startPriceUpdates(): void {
    this.priceUpdateSubscription = interval(60000).subscribe(() => {
      this.fetchCryptoPrices();  // Fetch updated top 3 cryptocurrencies
      this.fetchSpecificCryptoPrices(['algo', 'tron', 'solana']);  // Fetch updated specific tokens (ALGO, TRX, SOL)
    });
  }

  // Utility function to get the keys of the object
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
