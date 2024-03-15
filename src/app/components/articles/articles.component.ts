
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ArticlesService } from '../../services/articles/articles.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Article } from '../../models/article';
import { ResponseType } from '../../models/response-type';
import { HttpResponse } from '@angular/common/http';
import { ResultsType } from '../../models/results-type';
import { map } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {

  articles$ = this.articlesService.getArticlesV2()
    .pipe(
      map(r => r.results)
    );

  articles: Article[] | undefined;
  constructor(private articlesService: ArticlesService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.articlesService.getArticles().subscribe((response: HttpResponse<ResponseType<ResultsType>>) => {
      const obj: ResultsType = response?.body as unknown as ResultsType;
      const newObj: Article[] = obj.results as Article[];
      this.articles = newObj;
    })
  }

  navigateToArticle(id: number) {
    this.router.navigate(['/articles', id]);
  }

  checkKeyboardPress(event: KeyboardEvent, id: number) {
    if (event.key === "Enter") {
      this.navigateToArticle(id)
      return;
    }
    if (event.key === "Tab") {
      return;
    }
  }

}
