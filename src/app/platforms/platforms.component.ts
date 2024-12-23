import {Component, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConverterComponent} from "../converter/converter.component";
import {tokenStats} from "../../system/tokens/tokens1";
import {blockchains} from "../../system/blockChainTechnology/blockChainTechnology";
import {exchangers} from "../../system/exchangers/exchangers";
import {tokenImageSize} from "../../system/settings/configuration";
import {WalletTokens} from "../../system/cryptoWalletTokens/cryptoWalletTokens";
import {DataStatsComponent} from "./data-stats/data-stats.component";
import {RouterLink} from "@angular/router";
import {CurrencyComponent} from "./currency/currency.component";
import {countriesCurrencies} from "../../system/currency/currency";
import {CommunitiesComponent} from "./communities/communities.component";



@Component({
  selector: 'app-platforms',
  standalone: true,
  imports: [
    ConverterComponent,
    DataStatsComponent,
    RouterLink,
    CurrencyComponent,
    CommunitiesComponent,

  ],
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.scss'
})
export class PlatformsComponent {

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
}
