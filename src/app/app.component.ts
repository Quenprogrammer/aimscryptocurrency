import {Component, ElementRef, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PlatformsComponent} from "./platforms/platforms.component";
import {NgForOf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { Pipe, PipeTransform } from '@angular/core';
import {ColorPipePipe} from "../pipes/color-pipe.pipe";
import {RouterOutlet} from "@angular/router";
import {SelectTokenComponent} from "./select-token/select-token.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    FormsModule,
    NgStyle,
    ColorPipePipe,
    RouterOutlet,
    PlatformsComponent,
    SelectTokenComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  purchasedPrice: number = 80;
  currentPrice: number = 20;
  currentVolume: number = 80;
  volume: number = 80;
  stats: number = 0;
  percentageLost: number = 0;
  gainCurrency: number = 0;
  lostCurrency: number = 0;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.calculateValues();

  }

  calculateValues(): void {
    const gain = this.currentPrice - this.purchasedPrice;
    const loss = this.purchasedPrice - this.currentPrice;
    this.stats = (gain / this.purchasedPrice) * 100;

    this.gainCurrency = gain;

  }


  test = [
    {name: 'Platforms'},
    {name: 'Blockchains'},
    {name: 'Exchangers'},
    {name: 'Assets'},
    {name: 'Market'},
    {name: 'Portfolio'},
    {name: 'Convert'},
    {name: 'Spot'},
    {name: 'More'},

  ]

  private modalService = inject(NgbModal);

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, {scrollable: true, size: 'lg'});
  }

  selectedOption: any;
  options = [
    {value: 'option1', icon: 'icon1.png', text: 'Option 1'},
    {value: 'option2', icon: 'assets/blockchain/Picture9.webp', text: 'Option 2'}
  ];

  result: number = 0;
  now: number = 0;
  profit: number = 0;
  profitPercentage: number = 0;
  ngAfterViewInit() {
    const PurchasePrice = parseInt(this.elementRef.nativeElement.querySelector('#PurchasePrice').textContent);
    const volume = parseInt(this.elementRef.nativeElement.querySelector('#volume').textContent);
    const currentPrice = parseInt(this.elementRef.nativeElement.querySelector('#currentPrice').textContent);
    this.result = PurchasePrice * volume;
    this.now = currentPrice * volume;
    this.profit = this.now -this.result;
    this.profitPercentage = (this.profit / this.now) * 100


  }
}
