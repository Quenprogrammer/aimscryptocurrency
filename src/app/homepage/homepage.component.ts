import { Component } from '@angular/core';
import {menuItems} from "../../system/variables";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {
  menuItems= [
    { name: 'Academy', image: menuItems +'M18.svg', link: '/academy' },
    { name: 'Assets', image: menuItems +'M26.svg', link: '/assets' },
    { name: 'Platforms', image: menuItems +'M11.svg', link: '/platforms' },
    { name: 'Portfolio', image: menuItems +'M21.svg', link: '/portfolio' },
    { name: 'Market', image: menuItems +'M8.svg', link: '/market' },
    { name: 'News', image: menuItems +'M17.svg', link: '/news' },
    { name: 'Network', image: menuItems  +'M1.svg', link: '/network' },
      { name: 'P2P', image: menuItems +'M4.svg', link: '/p2p' },
    { name: 'Watchlist', image: menuItems +'M5.svg', link: '/watchlist' },
    { name: 'Currency Rate', image: menuItems +'M6.svg', link: '' },
    { name: 'Exchanger', image: menuItems +'M7.svg', link: '' },
    { name: 'API\'s', image: menuItems +'M9.svg', link: '' },


    { name: 'Law', image: menuItems +'M3.svg', link: '' },

    { name: 'About Us', image: menuItems +'M10.svg', link: '' },
   { name: 'Stack', image: menuItems +'M12.svg', link: '' },
    { name: 'Exchanger', image: menuItems +'M13.svg', link: '' },
    { name: 'Updates', image: menuItems +'M14.svg', link: '' },
    { name: 'Vault', image: menuItems +'M15.svg', link: '' },
    { name: 'Aims', image: menuItems +'M16.svg', link: '' },
    { name: 'Messages', image: menuItems +'M19.svg', link: '' },
    { name: 'Wallet', image: menuItems +'M20.svg', link: '' },
    { name: 'Community', image: menuItems +'M22.svg', link: '' },
    { name: 'Trade', image: menuItems +'M23.svg', link: '' },

  ];
}
