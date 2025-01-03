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
