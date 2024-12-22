import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'platforms',
    loadComponent: () => import('../app/platforms/platforms.component')
      .then(m => m.PlatformsComponent)
  },
  {
    path: 'converter',
    loadComponent: () => import('../app/converter/converter.component')
      .then(m => m.ConverterComponent)
  },


  {path: 'news', loadComponent: () => import('./news/tokens').then(_ => _.Tokens)},
  {path: 'news-details/:id', loadComponent: () => import('./news/news-details/tokensDetails').then(_ => _.TokensDetails)},

];
