import { Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('@nx-angular-standalone/products').then((m) => m.ProductsModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('@nx-angular-standalone/orders').then((m) => m.OrdersModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
];
