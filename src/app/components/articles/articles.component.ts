
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ArticlesService } from '../../services/articles/articles.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
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
export class ArticlesComponent {

  articles$ = this.articlesService.getArticles()
    .pipe(
      map(r => r.results)
    );

  constructor(private articlesService: ArticlesService,
    private router: Router) {}


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
