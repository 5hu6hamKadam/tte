import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: RemoteEntryComponent,
  },
  {
    path: 'typing-tutor',
    loadChildren: () =>
      import('../games/typing-tutor/typing-tutor.module').then(
        (m) => m.TypingTutorModule
      ),
  },
];
