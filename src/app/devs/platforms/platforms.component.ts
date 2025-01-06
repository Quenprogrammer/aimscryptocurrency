import {Component, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConverterComponent} from "../../converter/converter.component";
import {tokenStats} from "../../../system/DATA/tokens/tokens1";
import {blockchains} from "../../../system/blockChainTechnology/blockChainTechnology";
import {exchangers} from "../../../system/DATA/exchangers/exchangers";
import {tokenImageSize} from "../../../system/settings/configuration";
import {WalletTokens} from "../../../system/cryptoWalletTokens/cryptoWalletTokens";

import {RouterLink} from "@angular/router";

import {countriesCurrencies} from "../../../system/DATA/currency/currency";
import {CommunitiesComponent} from "./communities/communities.component";
import {FormsModule} from "@angular/forms";
import {query} from "@angular/animations";
import {DebugComponent} from "../../debug/debug.component";
import {CurrencyConverterComponent} from "../../currency-converter/currency-converter.component";
import {programmingLanguages} from "../../../debugFolder/test";
import {NODEjs} from "../../../system/DATA/devs/tools/nodeJS";
import {SocialsComponent} from "./socials/socials.component";
import {CardsComponent} from "./cards/cards.component";



@Component({
  selector: 'app-platforms',
  standalone: true,
  imports: [
    ConverterComponent,


    CommunitiesComponent,
    FormsModule,

    RouterLink,
    SocialsComponent,
    CardsComponent,


  ],
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.scss'
})
export class PlatformsComponent {


  // Function to handle search logic

  protected readonly programmingLanguages = programmingLanguages;
  protected readonly blockchains = blockchains;
  protected readonly exchangers = exchangers;
  protected readonly WalletTokens = WalletTokens;
  protected readonly NODEjs = NODEjs;



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

  WalletTokensModalOpen(WalletTokensModal1:any) {
    this.modalService.open(WalletTokensModal1, { scrollable: true, size: 'lg' } );
  }

  communitiesDataModal(WalletTokensModal1:any) {
    this.modalService.open(WalletTokensModal1, { scrollable: true, size: 'lg' } );
  }

  cryConvert(converter:any) {
    this.modalService.open(converter, { scrollable: true, size: 'lg' } );
  }

  protected readonly tokenImageSize = tokenImageSize;


  protected readonly countriesCurrencies = countriesCurrencies;
  protected readonly query = query;
}
