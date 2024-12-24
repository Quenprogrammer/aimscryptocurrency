import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomImageService {
  private randomImageSubject = new BehaviorSubject<string>('');
  randomImage$ = this.randomImageSubject.asObservable();

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

    // Update the image every 3 seconds
    interval(3000).subscribe(() => setImage());
  }
}
