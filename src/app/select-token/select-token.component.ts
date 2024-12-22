import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-select-token',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './select-token.component.html',
  styleUrl: './select-token.component.scss'
})
export class SelectTokenComponent {
  options = [
    { text: 'Option item 1', img: 'assets/img/landing/saas-1/industries/01.png' },
    { text: 'Option item 2', img: 'image2.jpg' },
    { text: 'Option item 3', img: 'image3.jpg' }
  ];

  // Variables to store the selected option's text and image
  selectedOption: string | null = null;
  selectedImage: string | null = null;

  // Method to update selected option and image
  selectOption(option: any): void {
    this.selectedOption = option.text;
    this.selectedImage = option.img;
  }

  cryptos = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', logo: '/assets/blockchain/Picture10.webp', website: 'https://bitcoin.org' },
    { id: 2, name: 'Ethereum', symbol: 'ETH', logo: '', website: 'https://ethereum.org' },
    { id: 3, name: 'Binance Coin', symbol: 'BNB', logo: '', website: 'https://www.binance.org' },
    { id: 4, name: 'Cardano', symbol: 'ADA', logo: '', website: 'https://cardano.org' },
    { id: 5, name: 'Solana', symbol: 'SOL', logo: '', website: 'https://solana.com' },
    { id: 6, name: 'XRP', symbol: 'XRP', logo: '', website: 'https://ripple.com/xrp/' },
    { id: 7, name: 'Polkadot', symbol: 'DOT', logo: '', website: 'https://polkadot.network' },
    { id: 8, name: 'Dogecoin', symbol: 'DOGE', logo: '', website: 'https://dogecoin.com' },
    { id: 9, name: 'Shiba Inu', symbol: 'SHIB', logo: '', website: 'https://www.shibatoken.com' },
    { id: 10, name: 'Chainlink', symbol: 'LINK', logo: '', website: 'https://chain.link' },
    { id: 11, name: 'Litecoin', symbol: 'LTC', logo: '', website: 'https://litecoin.org' },
    { id: 12, name: 'Bitcoin Cash', symbol: 'BCH', logo: '', website: 'https://bitcoincash.org' },
    { id: 13, name: 'Avalanche', symbol: 'AVAX', logo: '', website: 'https://avax.network' },
    { id: 14, name: 'Polygon', symbol: 'MATIC', logo: '', website: 'https://polygon.technology' },
    { id: 15, name: 'Terra', symbol: 'LUNA', logo: '', website: 'https://terra.money' },
    { id: 16, name: 'VeChain', symbol: 'VET', logo: '', website: 'https://www.vechain.org' },
    { id: 17, name: 'Uniswap', symbol: 'UNI', logo: '', website: 'https://uniswap.org' },
    { id: 18, name: 'Aave', symbol: 'AAVE', logo: '', website: 'https://aave.com' },
    { id: 19, name: 'Fantom', symbol: 'FTM', logo: '', website: 'https://fantom.foundation' },
    { id: 20, name: 'Cosmos', symbol: 'ATOM', logo: '', website: 'https://cosmos.network' },
    { id: 21, name: 'Tezos', symbol: 'XTZ', logo: '', website: 'https://www.tezos.com' },
    { id: 22, name: 'Algorand', symbol: 'ALGO', logo: '', website: 'https://www.algorand.com' },
    { id: 23, name: 'Stellar', symbol: 'XLM', logo: '', website: 'https://www.stellar.org' },
    { id: 24, name: 'TRON', symbol: 'TRX', logo: '', website: 'https://tron.network' },
    { id: 25, name: 'Theta', symbol: 'THETA', logo: '', website: 'https://thetatoken.org' },
    { id: 26, name: 'EOS', symbol: 'EOS', logo: '', website: 'https://eos.io' },
    { id: 27, name: 'IOTA', symbol: 'IOTA', logo: '', website: 'https://www.iota.org' },
    { id: 28, name: 'Zilliqa', symbol: 'ZIL', logo: '', website: 'https://www.zilliqa.com' },
    { id: 29, name: 'Elrond', symbol: 'EGLD', logo: '', website: 'https://elrond.com' },
    { id: 30, name: 'Decentraland', symbol: 'MANA', logo: '', website: 'https://decentraland.org' }
  ];

  constructor(/*private firestore: AngularFirestore*/) {}

  ngOnInit() {
    // Optional: Initialize any other data here if needed
  }

  // Add selected token to Firestore
/*  addToUserList(crypto: any) {
    const userRef = this.firestore.collection('usersList');
    userRef.add({
      name: crypto.name,
      symbol: crypto.symbol,
      logo: crypto.logo,   // Will remain blank
      website: crypto.website,
      id: crypto.id
    }).then(() => {
      console.log(`${crypto.name} added to user list`);
    }).catch((error:any) => {
      console.error("Error adding document: ", error);
    });
  }*/
}
