import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/portfolio';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Portfolio, data: { animation: 'Page' } },
  { path: 'about', component: About, data: { animation: 'Page' } },
];
