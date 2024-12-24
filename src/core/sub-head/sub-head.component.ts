import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AsyncPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-sub-head',
  standalone: true,
  imports: [DatePipe, AsyncPipe], // Import DatePipe
  template: `
    <div class="justify-content-center mx-auto" style="width: 100%">
      <p class="bg-dark text-white text-center px-5 py-3 mb-0">
        {{ currentDate$ | async | date: 'EEEE, MMMM d, yyyy h:mm:ss a' }}
      </p>
    </div>
  `
})
export class SubHeadComponent implements OnInit, OnDestroy {
  // Create a BehaviorSubject to store the current date
  currentDate$ = new BehaviorSubject<Date>(new Date());

  private intervalId: any;

  ngOnInit(): void {
    // Update the BehaviorSubject every second with the current date
    this.intervalId = setInterval(() => {
      this.currentDate$.next(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
