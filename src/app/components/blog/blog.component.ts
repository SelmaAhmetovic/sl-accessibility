import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs/blogs.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Blog } from '../../models/blog';

import { Title } from '@angular/platform-browser';
import { Subscription, map, switchMap, tap } from 'rxjs';

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
export class BlogComponent {

  id: string = '';
  blog: Blog | undefined;

  blog$ = this.route.params.pipe(
    map((x) => x['id']),
    switchMap((id) =>  this.blogsService.getBlogById(id)),
    tap((blog: Blog) => this.titleService.setTitle('Blog ' + blog?.title))
  );

  constructor(private blogsService: BlogsService,
              private route: ActivatedRoute,
              private titleService: Title) { }

}
