import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AsyncPipe, DatePipe} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sub-head',
  standalone: true,
  imports: [DatePipe, AsyncPipe, FormsModule], // Import DatePipe
  template: `
    <div class="container-fluid justify-content-center mx-auto" style="width: 100%">
      <div class="row bg-dark">
        <div class="col ">
          <p class="text-white text-center px-5 py-3 mb-0">
            {{ currentDate$ | async | date: 'EEEE, MMMM d, yyyy h:mm:ss a' }}
          </p>
        </div>
        <div class="col d-flex justify-content-end mx-2 bg-dark">
          <div class="search-container">
            <div class="row align-items-center mt-2 p-2">
              <div class="col-auto p-0">
                <select
                  [(ngModel)]="selectedSearchEngine"
                  class="form-select"
                  style="width: 150px; border-radius: 0.375rem 0 0 0.375rem; border-right: none; background-color: #1b1e22; color: white"
                >
                  <option value="google">Google</option>
                  <option value="bing">Microsoft Bing</option>
                  <option value="yahoo">Yahoo Search</option>
                  <option value="baidu">Baidu</option>
                  <option value="yandex">Yandex</option>
                  <option value="duckduckgo">DuckDuckGo</option>
                </select>
              </div>
              <div class="col-auto p-0">
                <div class="input-group">
                  <input
                    type="text"
                    [(ngModel)]="query1"
                    placeholder="Enter search term"
                    class="form-control"
                    (keydown.enter)="search()"
                    style="border-radius: 0 0.375rem 0.375rem 0; border-left: none;"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  `
})
export class SubHeadComponent implements OnInit, OnDestroy {
  // Create a BehaviorSubject to store the current date
  query1: string = '';  // Holds the search query
  selectedSearchEngine: string = 'google';  // Default search engine
  currentDate$ = new BehaviorSubject<Date>(new Date());

  private intervalId: any;

  ngOnInit(): void {
    // Update the BehaviorSubject every second with the current date
    this.intervalId = setInterval(() => {
      this.currentDate$.next(new Date());
    }, 1000);
  }
  search() {
    if (this.query1.trim() !== '') {
      let searchUrl = '';

      // Construct the search URL based on the selected search engine
      switch (this.selectedSearchEngine) {
        case 'google':
          searchUrl = `https://www.google.com/search?q=${encodeURIComponent(this.query1)}`;
          break;
        case 'bing':
          searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(this.query1)}`;
          break;
        case 'yahoo':
          searchUrl = `https://search.yahoo.com/search?p=${encodeURIComponent(this.query1)}`;
          break;
        case 'baidu':
          searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(this.query1)}`;
          break;
        case 'yandex':
          searchUrl = `https://yandex.com/search/?text=${encodeURIComponent(this.query1)}`;
          break;
        case 'duckduckgo':
          searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(this.query1)}`;
          break;
        default:
          searchUrl = `https://www.google.com/search?q=${encodeURIComponent(this.query1)}`;  // Default to Google
          break;
      }

      // Redirect the user to the selected search engine's results page
      window.location.href = searchUrl;
    } else {
      alert('Please enter a search term.');
    }
  }
  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }



}
