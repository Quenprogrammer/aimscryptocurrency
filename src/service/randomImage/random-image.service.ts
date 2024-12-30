import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomImageService implements OnDestroy {
  private randomImageSubject = new BehaviorSubject<string>('');
  randomImage$ = this.randomImageSubject.asObservable();
  private intervalSubscription: Subscription | null = null;

  constructor() {}

  // Method to set a custom list of images and start random selection
  setRandomImages(imageUrls: string[]): void {
    // Function to select a random image from the given array
    const setImage = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      this.randomImageSubject.next(imageUrls[randomIndex]);
    };

    // Set the random image immediately
    setImage();

    // Start the interval to update the image every 3 seconds
    this.intervalSubscription = interval(3000).subscribe(() => setImage());
  }

  // Cleanup method to unsubscribe from the interval when the service is destroyed
  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      console.log('RandomImageService interval unsubscribed');
    }
  }
}
