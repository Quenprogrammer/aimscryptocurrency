import { Component } from '@angular/core';
import { ConverterService } from '../../service/converter.service';
import { FormsModule } from '@angular/forms';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe,
    NgForOf,
    NgIf,
  ],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  baseAmount: number = 1;
  convertedAmount: number = 0;
  selectedToken: string = 'ethereum'; // Default token to convert to
  selectedBase: string = 'bitcoin';  // Default base currency (BTC)
  prices: any = {};
  tokenList: string[] = [
    'ethereum',
    'litecoin',
    'binancecoin',
    'ripple',
    'cardano',
    'polkadot',
    'dogecoin',
    'solana',
    'avalanche',
    'chainlink',
    'uniswap',
    'vechain',
    'polygon',
    'shibaInu',
    'stellar',
    'ftxToken',
    'tezos',
    'cosmos',
    'filecoin',
    'tron',
    'eos',
    'ethereumClassic',
    'helium',
    'aave',
    'maker',
    'pancakeswap',
    'thorchain',
    'yearnFinance',
    'zcash',
    'sandbox',
  ];
  baseList: string[] = ['bitcoin', 'ethereum', 'usdt']; // Base currencies (BTC, ETH, USDT)

  isLoading: boolean = false;  // Loading state flag
  errorMessage: string = '';  // Error message for missing data

  constructor(private cryptoService: ConverterService) {}

  ngOnInit(): void {
    this.fetchPrices();
  }

  // Fetch prices and handle loading/error states
  fetchPrices(): void {
    this.isLoading = true;
    this.errorMessage = '';  // Reset any previous error message

    // Simulate a delay to show loading
    setTimeout(() => {
      try {
        this.prices = this.cryptoService.getPrices();

        if (this.prices && Object.keys(this.prices).length > 0) {
          this.convertCurrency();
        } else {
          throw new Error('Price data is unavailable.');
        }
      } catch (error) {
        this.isLoading = false;
        this.errorMessage = 'Error fetching price data. Please try again later.';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }, 5000); // Simulate a delay
  }

  convertCurrency(): void {
    if (this.selectedBase && this.selectedToken && this.baseAmount && this.prices) {
      const baseToUsd = this.prices[this.selectedBase];
      const tokenPrice = this.prices[this.selectedToken];

      // Check if prices for both base and token are available
      if (baseToUsd && tokenPrice) {
        this.convertedAmount = (this.baseAmount * baseToUsd) / tokenPrice;
      } else {
        this.errorMessage = 'Price data for selected base or token is missing.';
      }
    }
  }

  onBaseAmountChange(): void {
    this.convertCurrency();
  }

  onBaseChange(): void {
    this.convertCurrency();
  }

  onTokenChange(): void {
    this.convertCurrency();
  }
}
