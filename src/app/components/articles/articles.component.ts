
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ArticlesService } from '../../services/articles/articles.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {

  articles: any;
  constructor(private articlesService: ArticlesService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.articlesService.getArticles().subscribe((response: any) => {
      this.articles = response.body.results;
    })
  }

  navigateToArticle(id: number) {
    this.router.navigate(['/articles', id]);
  }

}
