import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ArticlesService } from '../../services/articles/articles.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { HttpResponse } from '@angular/common/http';
import { ResponseType } from '../../models/response-type';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit{

  id: string = '';
  article: Article | undefined;
  constructor(private articlesService: ArticlesService,
              private route: ActivatedRoute) {

  this.route.params.subscribe(
    (params: Params) => {
      this.id = params['id'];
    });
  
  }

  ngOnInit(): void {
    this.articlesService.getArticleById(this.id).subscribe((response:  HttpResponse<ResponseType<Article>>) => {
      const article: Article = response?.body as unknown as Article;
      this.article = article;
    })
  }

}
