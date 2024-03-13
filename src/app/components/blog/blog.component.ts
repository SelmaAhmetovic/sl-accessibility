import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs/blogs.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Blog } from '../../models/blog';

import { HttpResponse } from '@angular/common/http';
import { ResponseType } from '../../models/response-type';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {

  id: string = '';
  blog: Blog | undefined;
  constructor(private blogsService: BlogsService,
              private route: ActivatedRoute,
              private titleService: Title) {

  this.route.params.subscribe(
    (params: Params) => {
      this.id = params['id'];
    });
  
  }

  ngOnInit(): void {
    this.blogsService.getBlogById(this.id).subscribe((response: HttpResponse<ResponseType<Blog>>) => {
      const blog: Blog = response?.body as unknown as Blog;
      this.blog = blog;
      this.titleService.setTitle('Article ' + blog?.title);
    })
  }

}
