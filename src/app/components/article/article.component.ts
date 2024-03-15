import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ArticlesService } from '../../services/articles/articles.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { Title } from '@angular/platform-browser';
import { A11yModule, LiveAnnouncer } from '@angular/cdk/a11y';
import { Subscription, map } from 'rxjs';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule,
    A11yModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  id: string = '';
  article: Article | undefined;

  constructor(private articlesService: ArticlesService,
              private route: ActivatedRoute,
              private titleService: Title,
              private announcer: LiveAnnouncer) {

  this.route.params.subscribe(
    (params: Params) => {
      this.id = params['id'];
      if(this.id) {
        const subscription: Subscription = this.articlesService.getArticleById(this.id)
        .pipe(
          map(r => r)).subscribe(
            (response: Article) => {
              this.article = response;
              this.titleService.setTitle('Article ' + this.article?.title);
              this.announcer.announce('Article ' + this.article?.title)
              subscription.unsubscribe();
            }
          );
        }
      });
  
  }

}
