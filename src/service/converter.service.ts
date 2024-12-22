import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  private prices = {
    bitcoin: 10256.65,  // Example price for Bitcoin (BTC)
    ethereum: 1500,    // Example price for Ethereum (ETH)
    binancecoin: 300,  // Example price for Binance Coin (BNB)
    ripple: 0.45,      // Example price for Ripple (XRP)
    cardano: 1.20,     // Example price for Cardano (ADA)
    polkadot: 10,      // Example price for Polkadot (DOT)
    dogecoin: 0.07,    // Example price for Dogecoin (DOGE)
    solana: 100,       // Example price for Solana (SOL)
    avalanche: 80,     // Example price for Avalanche (AVAX)
    chainlink: 25,     // Example price for Chainlink (LINK)
    uniswap: 20,       // Example price for Uniswap (UNI)
    litecoin: 100,     // Example price for Litecoin (LTC)
    vechain: 0.15,     // Example price for VeChain (VET)
    polygon: 2.50,     // Example price for Polygon (MATIC)
    shibaInu: 0.00001, // Example price for Shiba Inu (SHIB)
    stellar: 0.12,     // Example price for Stellar (XLM)
    ftxToken: 40,      // Example price for FTX Token (FTT)
    tezos: 4.50,       // Example price for Tezos (XTZ)
    cosmos: 20,        // Example price for Cosmos (ATOM)
    filecoin: 80,      // Example price for Filecoin (FIL)
    tron: 0.08,        // Example price for TRON (TRX)
    eos: 4.00,         // Example price for EOS (EOS)
    ethereumClassic: 18, // Example price for Ethereum Classic (ETC)
    helium: 20,        // Example price for Helium (HNT)
    aave: 200,         // Example price for Aave (AAVE)
    maker: 1500,       // Example price for Maker (MKR)
    pancakeswap: 12,   // Example price for PancakeSwap (CAKE)
    thorchain: 15,     // Example price for Thorchain (RUNE)
    yearnFinance: 2500, // Example price for Yearn Finance (YFI)
    zcash: 120,        // Example price for ZCash (ZEC)
    sandbox: 8         // Example price for Sandbox (SAND)
  };

  constructor() {}

  // Return the static prices
  getPrices(): any {
    return this.prices;
  }
}
