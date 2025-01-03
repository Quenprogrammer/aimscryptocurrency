import { Component } from '@angular/core';
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './network.component.html',
  styleUrl: './network.component.scss'
})
export class NetworkComponent {
  timeLeft: number = 0;
  interval:any;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft= this.timeLeft+0.00001;
      } else {
        this.timeLeft = 60;
      }
    },1)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
