import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {countriesCurrencies, testCurrencies} from "../../system/DATA/currency/currency";
import {RouterLink} from "@angular/router";

interface Currency {
  name: string;
  code: string;
  rate: number;
}

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent {
  currencies: Currency[] = [
    { name: 'US Dollar', code: 'USD', rate: 1 },
    { name: 'Euro', code: 'EUR', rate: 0.88 },
    { name: 'Japanese Yen', code: 'JPY', rate: 114.74 },
    { name: 'British Pound', code: 'GBP', rate: 0.76 },
    { name: 'Indian Rupee', code: 'INR', rate: 74.83 },
    { name: 'Australian Dollar', code: 'AUD', rate: 1.48 },
    { name: 'Canadian Dollar', code: 'CAD', rate: 1.23 },
    { name: 'Singapore Dollar', code: 'SGD', rate: 1.35 },
    { name: 'Nigerian Naira', code: 'NGN', rate: 411.15 },
    // Add more currencies here...
  ];

  conversionForm = new FormGroup({
    fromCurrency: new FormControl('USD'),
    toCurrency: new FormControl('EUR'),
    amount: new FormControl(1)
  });

  result: number = 0; // Initialize with a default value

  constructor() { }

  ngOnInit(): void {
    // Automatically trigger the conversion when form values change
    this.conversionForm.valueChanges.subscribe(() => {
      this.convert();
    });
  }

  convert(): void {
    const fromCurrency = this.currencies.find(c => c.code === this.conversionForm.get('fromCurrency')?.value);
    const toCurrency = this.currencies.find(c => c.code === this.conversionForm.get('toCurrency')?.value);
    const amount = this.conversionForm.get('amount')?.value;

    if (fromCurrency && toCurrency && amount !== null && amount !== undefined) {
      this.result = (amount / fromCurrency.rate) * toCurrency.rate;
    } else {
      this.result = 0;
    }
  }

  protected readonly countriesCurrencies = countriesCurrencies;
  protected readonly testCurrencies = testCurrencies;
}
