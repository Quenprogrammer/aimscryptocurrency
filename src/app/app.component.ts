import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestCryptoComponent} from "./test-crypto/test-crypto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestCryptoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aimscrypto';
}
