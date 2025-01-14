import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'homepage',
    loadComponent: () => import('../app/homepage/homepage.component')
      .then(m => m.HomepageComponent)
  },
  {
    path: 'market',
    loadComponent: () => import('../app/market/market.component')
      .then(m => m.MarketComponent)
  },
  {
    path: 'network',
    loadComponent: () => import('../app/network/network.component')
      .then(m => m.NetworkComponent)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('../app/portfolio/portfolio.component')
      .then(m => m.PortfolioComponent)
  },
  {
    path: 'assets',
    loadComponent: () => import('../app/assets/assets.component')
      .then(m => m.AssetsComponent)
  },
  {
    path: 'platforms',
    loadComponent: () => import('../app/platforms/platforms.component')
      .then(m => m.PlatformsComponent)
  },
  {
    path: 'devs',
    loadComponent: () => import('../app/devs/platforms/platforms.component')
      .then(m => m.PlatformsComponent)
  },
  {
    path: 'p2p',
    loadComponent: () => import('../app/p2p/p2p.component')
      .then(m => m.P2pComponent)
  },
  {
    path: 'watchlist',
    loadComponent: () => import('../app/watchlist/watchlist.component')
      .then(m => m.WatchlistComponent)
  },

  {
    path: 'converter',
    loadComponent: () => import('../app/converter/converter.component')
      .then(m => m.ConverterComponent)
  },
  {
    path: 'apk',
    loadComponent: () => import('../app/resources/apk/apk.component')
      .then(m => m.ApkComponent)
  },
  {
    path: 'network',
    loadComponent: () => import('../app/resources/network/network.component')
      .then(m => m.NetworkComponent)
  },
  {
    path: 'trade',
    loadComponent: () => import('../app/resources/trade/trade.component')
      .then(m => m.TradeComponent)
  },
  {
    path: 'lectures',
    loadComponent: () => import('../app/academy/lectures/lectures.component')
      .then(m => m.LecturesComponent)
  },


  {path: 'tokensCreation', loadComponent: () => import('../app/resources/news/tokens').then(_ => _.Tokens)},
  {path: 'tokensCreation/:id', loadComponent: () => import('../app/resources/news/news-details/tokensDetails').then(_ => _.TokensDetails)},


  {
    path: 'createToken',
    loadComponent: () => import('../app/resources/create-token/create-token.component')
      .then(m => m.CreateTokenComponent)
  },
  {
    path: 'articles',
    loadComponent: () => import('../app/articles/articles.component')
      .then(m => m.ArticlesComponent)
  },
  {
    path: 'currency',
    loadComponent: () => import('../app/currency-converter/currency-converter.component')
      .then(m => m.CurrencyConverterComponent)
  },
  {
    path: 'policy',
    loadComponent: () => import('../app/company/policy/policy.component')
      .then(m => m.PolicyComponent)
  },
  {
    path: 'reader',
    loadComponent: () => import('../core/reader/reader.component')
      .then(m => m.ReaderComponent)
  },


  {
    path: 'workspace',
    loadComponent: () => import('../debugFolder/workspace/workspace.component')
      .then(m => m.WorkspaceComponent)
  },
  {
    path: 'preview/:id',
    loadComponent: () => import('../app/platforms/create-token/preview/preview.component')
      .then(m => m.PreviewComponent)
  },


  {path: 'news', loadComponent: () => import('./news/tokens').then(_ => _.Tokens)},
  {path: 'news-details/:id', loadComponent: () => import('./news/news-details/tokensDetails').then(_ => _.TokensDetails)},

];
