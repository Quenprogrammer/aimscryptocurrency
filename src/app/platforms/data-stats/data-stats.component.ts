import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {tokenStats} from "../../../system/tokens/tokens1";
import {blockchains} from "../../../system/blockChainTechnology/blockChainTechnology";
import {exchangers} from "../../../system/exchangers/exchangers";

export interface Statistic {
  value: number;
  icon:  number | string;
  label: string;
  animatedValue?: number; // Optional property for animated value
}
@Component({
  selector: 'app-data-stats',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './data-stats.component.html',
  styleUrl: './data-stats.component.scss'
})
export class DataStatsComponent {
  tokenCount:number=tokenStats.length
  blockchains:number=blockchains.length
  exchangers:number=exchangers.length

  @ViewChild('statisticsSection') statisticsSection!: ElementRef;

  statistics: Statistic[] = [
    { value: this.tokenCount, label: 'Tokens', icon:'/assets/icons/img_1.png' },
    { value: this.blockchains, label: 'Blockchains', icon:'/assets/icons/img.png' },
    { value: this.exchangers, label: 'Exchangers', icon:'/assets/icons/img_2.png'},
  { value: 5000, label: 'Crypto tools' ,icon:'/assets/icons/img_2.png' },


  ];

  private isAnimated: boolean = false; // Flag to check if animation has started

  ngAfterViewInit(): void {
    this.createObserver();
  }

  private createObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimated) {
          this.animateStatistics(); // Start the animation
          this.isAnimated = true; // Set the flag to true to avoid re-triggering
          observer.unobserve(entry.target); // Stop observing once the animation starts
        }
      });
    });

    observer.observe(this.statisticsSection.nativeElement); // Observe the section
  }

  private animateStatistics(): void {
    const duration = 8000; // Increased duration to 6000 ms (6 seconds)
    this.statistics.forEach(stat => {
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
        }
      }, 100); // Update every 100 milliseconds
    });
  }
}
