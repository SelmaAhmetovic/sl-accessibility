import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs/blogs.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  blogs$ = this.blogsService.getBlogs()
    .pipe(
      map(r => r.results)
    );

  constructor(private blogsService: BlogsService,
              private router: Router) {

  }


  navigateToBlog(id: number) {
    this.router.navigate(['/blogs', id]);
  }

  checkKeyboardPress(event: KeyboardEvent, id: number){
    if(event.key === "Enter") {
      this.navigateToBlog(id)
      return;
    }
    if(event.key === "Tab") {
      return;
    }
  }

}
