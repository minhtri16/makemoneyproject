import { Routes } from '@angular/router';
import { ProductListsComponent } from './pages/product-lists/product-lists.component';


export const routes: Routes = [
  {
     //path: 'products/:first/:second',
    path: 'products',
    component:ProductListsComponent,
    title: 'Product List'
  },
];

