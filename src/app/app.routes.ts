import { Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ReportsComponent } from './components/reports/reports.component';


export const routes: Routes = [
  {
    path: 'articles',
    children: [
        { path: '', component: ArticlesComponent,  title: 'List of all articles' },
        {
            path: ':id',
            loadComponent: () => import('./components/article/article.component')
              .then(mod => mod.ArticleComponent)
        },
    ]
  }, 
  {
    path: 'blogs',
    children: [
        { path: '', component: BlogsComponent , title: 'List of all blogs'},
        {
            path: ':id',
            loadComponent: () => import('./components/blog/blog.component')
              .then(mod => mod.BlogComponent)
        },
    ]
  },
  {
    path: 'reports',
    children: [
        { path: '', component: ReportsComponent, title: 'List of all reports' },
        {
            path: ':id',  
            loadComponent: () => import('./components/report/report.component')
              .then(mod => mod.ReportComponent)
        },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    component: ArticlesComponent
  },
  ];



//   {
//     path: '**',
//     loadComponent: () => import('./page-not-found/page-not-found.component')
//       .then(mod => mod.PageNotFoundComponent)
//   }
