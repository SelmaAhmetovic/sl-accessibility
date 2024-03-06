import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ArticlesService } from '../../services/articles/articles.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

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

  id: any;
  article: any;
  constructor(private articlesService: ArticlesService,
              private route: ActivatedRoute) {

  this.route.params.subscribe(
    (params: any) => {
      this.id = params.id;
    });
  
  }

  ngOnInit(): void {
    this.articlesService.getArticleById(this.id).subscribe((response: any) => {
      this.article = response.body;
    })
  }

}
