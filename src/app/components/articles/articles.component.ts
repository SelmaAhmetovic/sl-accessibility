
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ArticlesService } from '../../services/articles.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

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
  constructor(private articlesService: ArticlesService) {

  }
  ngOnInit(): void {
    this.articlesService.getArticles().subscribe((response: any) => {
      this.articles = response.body.results;
    })
  }

}
