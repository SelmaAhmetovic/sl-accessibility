import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs/blogs.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

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

  id: any;
  blog: any;
  constructor(private blogsService: BlogsService,
              private route: ActivatedRoute) {

  this.route.params.subscribe(
    (params: any) => {
      this.id = params.id;
    });
  
  }

  ngOnInit(): void {
    this.blogsService.getBlogById(this.id).subscribe((response: any) => {
      this.blog = response.body;
    })
  }

}
