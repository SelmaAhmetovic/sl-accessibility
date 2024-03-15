import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs/blogs.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Blog } from '../../models/blog';

import { Title } from '@angular/platform-browser';
import { Subscription, map } from 'rxjs';

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
  
  constructor(private blogsService: BlogsService,
              private route: ActivatedRoute,
              private titleService: Title) {

                this.route.params.subscribe(
                  (params: Params) => {
                    this.id = params['id'];
                    if(this.id) {
                      const subscription: Subscription = this.blogsService.getBlogById(this.id)
                      .pipe(
                        map(r => r)).subscribe(
                          (response: Blog) => {
                            this.blog = response;
                            this.titleService.setTitle('Blog ' + this.blog?.title);
                            subscription.unsubscribe();
                          }
                        );
                      }
                    });
                
                }

}
