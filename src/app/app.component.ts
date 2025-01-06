import {Component, ElementRef, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PlatformsComponent} from "./platforms/platforms.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { Pipe, PipeTransform } from '@angular/core';
import {ColorPipePipe} from "../pipes/color-pipe.pipe";
import {RouterOutlet} from "@angular/router";
import {SubHeadComponent} from "../core/sub-head/sub-head.component";
import {PdfReaderComponent} from "./pdf-reader/pdf-reader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    FormsModule,
    NgStyle,
    ColorPipePipe,
    RouterOutlet,
    PlatformsComponent,
    SubHeadComponent,
    NgIf,
    ReactiveFormsModule,
    NgForOf,
    PdfReaderComponent,


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 /* purchasedPrice: number = 80;
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


  }*/

  signupForm: FormGroup;
  countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'India', 'Australia', 'Japan']; // Add more as needed
  walletTypes = [
    'MetaMask', 'Trust Wallet', 'Coinbase Wallet', 'Ledger', 'Trezor',
    'Binance Chain Wallet', 'Exodus', 'MyEtherWallet', 'Guarda Wallet',
    'Atomic Wallet', 'Electrum', 'BitPay', 'Blockstream Green',
    'Samourai Wallet', 'Wasabi Wallet', 'Jaxx Liberty', 'Zengo', 'Edge',
    'BRD Wallet', 'Coinomi', 'Crypto.com Wallet', 'Freewallet', 'Luno Wallet',
    'SafePal', 'Phantom', 'Solflare', 'Cobo Wallet', 'Ellipal Wallet', 'CoolWallet S'
  ];

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        country: ['', Validators.required],
        wallets: this.fb.array([this.createWalletGroup()]),
      },
      { validators: this.passwordMatchValidator });
  }

  get wallets(): FormArray {
    return this.signupForm.get('wallets') as FormArray;
  }

  createWalletGroup(): FormGroup {
    return this.fb.group({
      walletType: ['', Validators.required],
      walletAddress: ['', Validators.required],
    });
  }

  addWallet(): void {
    this.wallets.push(this.createWalletGroup());
  }

  removeWallet(index: number): void {
    this.wallets.removeAt(index);
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Signup Form Data:', this.signupForm.value);
      alert('Signup successful!');
      this.signupForm.reset();
    }
  }

}
