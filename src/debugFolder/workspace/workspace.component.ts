import { Component } from '@angular/core';
import {ArticlesComponent} from "../../app/articles/articles.component";
import {CreateTokenComponent} from "../../app/platforms/create-token/create-token.component";
import {menuItems} from "../../system/variables";
import {tokenStats} from "../../system/DATA/tokens/tokens1";

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    ArticlesComponent,
    CreateTokenComponent
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
   menuItems = [

    { name: 'Network', image: menuItems  +'M1.svg', link: '(link unavailable)' },
    { name: 'Law', image: menuItems +'M3.svg', link: '(link unavailable)' },
    { name: 'P2P', image: menuItems +'M4.svg', link: '(link unavailable)' },
    { name: 'Watchlist', image: menuItems +'M5.svg', link: '(link unavailable)' },
    { name: 'Currency Rate', image: menuItems +'M6.svg', link: '(link unavailable)' },
    { name: 'Exchanger', image: menuItems +'M7.svg', link: '(link unavailable)' },
    { name: 'Market', image: menuItems +'M8.svg', link: '(link unavailable)' },
    { name: 'Watchlist', image: menuItems +'M9.svg', link: '(link unavailable)' },
    { name: 'About Us', image: menuItems +'M10.svg', link: '(link unavailable)' },
    { name: 'Platforms', image: menuItems +'M11.svg', link: '(link unavailable)' },
    { name: 'Stack', image: menuItems +'M12.svg', link: '(link unavailable)' },
    { name: 'Exchanger', image: menuItems +'M13.svg', link: '(link unavailable)' },
    { name: 'Updates', image: menuItems +'M14.svg', link: '(link unavailable)' },
    { name: 'Vault', image: menuItems +'M15.svg', link: '(link unavailable)' },
    { name: 'Aims', image: menuItems +'M16.svg', link: '(link unavailable)' },
    { name: 'News', image: menuItems +'M17.svg', link: '(link unavailable)' },
    { name: 'Academy', image: menuItems +'M18.svg', link: '(link unavailable)' },
    { name: 'Messages', image: menuItems +'M19.svg', link: '(link unavailable)' },
    { name: 'Wallet', image: menuItems +'M20.svg', link: '(link unavailable)' },
    { name: 'Portfolio', image: menuItems +'M21.svg', link: '(link unavailable)' },
    { name: 'Community', image: menuItems +'M22.svg', link: '(link unavailable)' },
    { name: 'Trade', image: menuItems +'M23.svg', link: '(link unavailable)' },
    { name: 'Assets', image: menuItems +'M26.svg', link: '(link unavailable)' },

  ];
  protected readonly tokenStats = tokenStats;
}
