import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AsyncPipe, NgClass, NgForOf} from '@angular/common';
import { signal } from '@angular/core';  // Importing signal from Angular core
import { tokenStats } from "../../../system/DATA/tokens/tokens1";
import { blockchains } from "../../../system/blockChainTechnology/blockChainTechnology";
import { exchangers } from "../../../system/DATA/exchangers/exchangers";

export interface Statistic {
  value: number;
  icon: number | string;
  label: string;
  animatedValue?: number; // Optional property for animated value
}

@Component({
  selector: 'app-data-stats',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    AsyncPipe
  ],
  template: `
    <div #statisticsSection class="container mt-5">
      <div class="row">
        <div class="col-6 col-md-3 text-center mb-7 highlight-column" *ngFor="let stat of statistics$ | async; let i = index">
          <div class="highlight highlight--bordered card shadow-lg mb-2" [ngClass]="{ 'no-border-right': (i + 1) % 4 === 0 }">
            <div class="row">
              <div class="col-3">
                <div class="highlight-head">
                  <img class="avatar avatar-lg mb-0" [src]="stat.icon" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 70px; margin: 5px; padding: 10px">
                </div>
              </div>
              <div class="col-6">
                <div class="highlight-head">
                  <h1 class="display-4 display-md-4">{{ stat.animatedValue || 0 }}</h1>
                </div>
                <div class="highlight-body">
                  <p>{{ stat.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DataStatsComponent implements AfterViewInit {
  @ViewChild('statisticsSection') statisticsSection!: ElementRef;

  // Shared state using BehaviorSubject
  private statisticsSubject = new BehaviorSubject<Statistic[]>([
    { value: tokenStats.length, label: 'Tokens', icon: '/assets/icons/img_1.png' },
    { value: blockchains.length, label: 'Blockchains', icon: '/assets/icons/img.png' },
    { value: exchangers.length, label: 'Exchangers', icon: '/assets/icons/img_2.png' },
    { value: 5000, label: 'Crypto tools', icon: '/assets/icons/img_2.png' }
  ]);
  statistics$ = this.statisticsSubject.asObservable();

  // Local state using Signals
  private isAnimated = signal(false);  // Local state to track animation trigger

  ngAfterViewInit(): void {
    this.createObserver();
  }

  private createObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimated()) {
          this.animateStatistics(); // Start the animation
          this.isAnimated.set(true); // Set the signal to true to avoid re-triggering
          observer.unobserve(entry.target); // Stop observing once the animation starts
        }
      });
    });

    observer.observe(this.statisticsSection.nativeElement); // Observe the section
  }

  private animateStatistics(): void {
    const duration = 8000; // Duration for animation
    const currentStatistics = this.statisticsSubject.getValue();

    currentStatistics.forEach(stat => {
      stat.animatedValue = 0; // Initialize animatedValue to 0
      const total = stat.value;
      const increment = Math.ceil(total / (duration / 100)); // Increment value
      let current = 0;

      const interval = setInterval(() => {
        if (current < total) {
          current += increment; // Increase current value
          if (current > total) {
            current = total; // Ensure it does not exceed the total
          }
          stat.animatedValue = current; // Update animatedValue
        } else {
          clearInterval(interval); // Clear interval when done
          // Emit updated statistics data
          this.statisticsSubject.next([...currentStatistics]);
        }
      }, 100); // Update every 100 milliseconds
    });
  }
}
