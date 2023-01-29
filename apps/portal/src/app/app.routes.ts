import { Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const appRoutes: Route[] = [
  {
    path: 'tools',
    loadChildren: () => import('tools/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'games',
    loadChildren: () => import('games/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('portfolio/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: HomePageComponent,
  },
];
