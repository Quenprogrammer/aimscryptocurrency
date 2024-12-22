import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, DecimalPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.scss'
})
export class DebugComponent {
  // Initialize form variables
  purchasedPrice: number = 100;
  currentPrice: number = 120;
  currentVolume: number = 50;
  volume: number = 100;

  // Initialize calculated variables
  percentageGain: number = 0;
  percentageLost: number = 0;
  gainCurrency: number = 0;
  lostCurrency: number = 0;

  // Method to calculate the results based on the inputs
  calculate() {
    // Calculate percentage gain
    if (this.purchasedPrice > 0) {
      this.percentageGain = ((this.currentPrice - this.purchasedPrice) / this.purchasedPrice) * 100;
    }

    // Calculate percentage loss
    if (this.currentPrice < this.purchasedPrice) {
      this.percentageLost = ((this.purchasedPrice - this.currentPrice) / this.purchasedPrice) * 100;
    } else {
      this.percentageLost = 0; // No loss if currentPrice is not less than purchasedPrice
    }

    // Calculate gain/lost currency
    this.gainCurrency = (this.currentPrice - this.purchasedPrice) * this.currentVolume;
    this.lostCurrency = (this.purchasedPrice - this.currentPrice) * this.volume;
  }

  // This method is triggered every time a user updates the input fields
  updateValues() {
    this.calculate();
  }
}
