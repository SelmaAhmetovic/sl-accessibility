import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ArticlesService } from '../../services/articles/articles.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article';
import { Title } from '@angular/platform-browser';
import { A11yModule, LiveAnnouncer } from '@angular/cdk/a11y';
import { map, switchMap, tap } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    A11yModule,
    MatButtonModule,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  id: string = '';
  articleOld: Article | undefined;

  article$ = this.route.params.pipe(
    map((x) => x['id']),
    switchMap((id) => this.articlesService.getArticleById(id)),
    tap((article: Article) => {
      this.titleService.setTitle('Article ' + article?.title);
      this.announcer.announce('Article ' + article?.title);
    })
  );

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private titleService: Title,
    private announcer: LiveAnnouncer
  ) {}
}
