import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.HomeComponent),
      },
      {
        path: 'items',
        loadComponent: () => import('./item-list/item-list').then(m => m.ItemList)
      },
      {
        path: 'items/:id',
        loadComponent: () => import('./Item-details/item-details').then(m => m.ItemDetailsComponent)
      },
      {
        path: 'add-item',
        loadComponent: () => import('./item-form/item-form').then(m => m.ItemFormComponent)
      }
    ]
  }
];