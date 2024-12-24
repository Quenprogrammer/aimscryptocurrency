import {Component, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConverterComponent} from "../converter/converter.component";
import {tokenStats} from "../../system/DATA/tokens/tokens1";
import {blockchains} from "../../system/blockChainTechnology/blockChainTechnology";
import {exchangers} from "../../system/DATA/exchangers/exchangers";
import {tokenImageSize} from "../../system/settings/configuration";
import {WalletTokens} from "../../system/cryptoWalletTokens/cryptoWalletTokens";
import {DataStatsComponent} from "./data-stats/data-stats.component";
import {RouterLink} from "@angular/router";
import {CurrencyComponent} from "./currency/currency.component";
import {countriesCurrencies} from "../../system/DATA/currency/currency";
import {CommunitiesComponent} from "./communities/communities.component";
import {FormsModule} from "@angular/forms";
import {query} from "@angular/animations";
import {DebugComponent} from "../debug/debug.component";



@Component({
  selector: 'app-platforms',
  standalone: true,
  imports: [
    ConverterComponent,
    DataStatsComponent,
    RouterLink,
    CurrencyComponent,
    CommunitiesComponent,
    FormsModule,
    DebugComponent,

  ],
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.scss'
})
export class PlatformsComponent {
  query1: string = '';  // Holds the search query
  selectedSearchEngine: string = 'google';  // Default search engine

  // Function to handle search logic
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
  protected readonly tokenStats = tokenStats;
  protected readonly blockchains = blockchains;
  protected readonly exchangers = exchangers;
  protected readonly WalletTokens = WalletTokens;



  private modalService = inject(NgbModal);

  openScrollableContent(longContent:any) {
    this.modalService.open(longContent, { scrollable: true, size: 'lg' } );
  }
  cex(longContent1:any) {
    this.modalService.open(longContent1, { scrollable: true, size: 'lg' } );
  }
  blockChain(longContent2:any) {
    this.modalService.open(longContent2, { scrollable: true, size: 'lg' } );
  }
  countriesCurrencyModal(countriesCurrency:any) {
    this.modalService.open(countriesCurrency, { scrollable: true, size: 'lg' } );
  }

  WalletTokensModalOpen(WalletTokensModal:any) {
    this.modalService.open(WalletTokensModal, { scrollable: true, size: 'lg' } );
  }
  cryConvert(converter:any) {
    this.modalService.open(converter, { scrollable: true, size: 'lg' } );
  }

  protected readonly tokenImageSize = tokenImageSize;


  protected readonly countriesCurrencies = countriesCurrencies;
  protected readonly query = query;
}
