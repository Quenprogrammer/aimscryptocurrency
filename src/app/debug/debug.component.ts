import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, DecimalPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    DecimalPipe,
    NgIf,
    NgForOf
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




  questions = [
    { text: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
    { text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], correctAnswer: 'Paris' },
    { text: 'What is 5 x 6?', options: ['30', '31', '32'], correctAnswer: '30' },
    { text: 'What is the color of the sky?', options: ['Blue', 'Green', 'Red'], correctAnswer: 'Blue' },
    { text: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter'], correctAnswer: 'Mars' },
    { text: 'What is the boiling point of water?', options: ['100°C', '90°C', '80°C'], correctAnswer: '100°C' },
    { text: 'Who wrote "Romeo and Juliet"?', options: ['Shakespeare', 'Dickens', 'Austen'], correctAnswer: 'Shakespeare' },
    { text: 'What is the largest ocean?', options: ['Atlantic', 'Pacific', 'Indian'], correctAnswer: 'Pacific' },
    { text: 'What is the square root of 64?', options: ['6', '8', '10'], correctAnswer: '8' },
    { text: 'Which gas do plants absorb?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen'], correctAnswer: 'Carbon Dioxide' },
  ];

  userAnswers: string[] = new Array(this.questions.length).fill(null);
  score: number | null = null;

  submitExam() {
    this.score = this.questions.reduce((score, question, index) => {
      return score + (this.userAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  }
}
