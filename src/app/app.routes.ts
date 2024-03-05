import { Routes } from '@angular/router';

// lazy-load standalone component
export const routes: Routes = [
  {
    path: 'articles',
    loadComponent: () => import('./components/articles/articles.component')
      .then(mod => mod.ArticlesComponent)
  }, 
  {
    path: 'blogs',
    loadComponent: () => import('./components/blogs/blogs.component')
      .then(mod => mod.BlogsComponent)
  }, 
  {
    path: 'reports',
    loadComponent: () => import('./components/reports/reports.component')
      .then(mod => mod.ReportsComponent)
  }, 
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/articles/articles.component').then(mod => mod.ArticlesComponent)
  },
  ];


//   {
//     path: '**',
//     loadComponent: () => import('./page-not-found/page-not-found.component')
//       .then(mod => mod.PageNotFoundComponent)
//   }
