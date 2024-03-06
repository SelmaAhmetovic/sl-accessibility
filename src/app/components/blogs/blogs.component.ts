import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs/blogs.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  blogs: any;
  constructor(private blogsService: BlogsService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe((response: any) => {
      this.blogs = response.body.results;
    })
  }

  navigateToBlog(id: number) {
    this.router.navigate(['/blogs', id]);
  }

}
