import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs/blogs.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { HttpResponse } from '@angular/common/http';
import { ResponseType } from '../../models/response-type';
import { ResultsType } from '../../models/results-type';

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
export class BlogsComponent implements OnInit {

  blogs: Blog[] | undefined;
  constructor(private blogsService: BlogsService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe((response: HttpResponse<ResponseType<ResultsType>>) => {
      const obj: ResultsType = response?.body as unknown as ResultsType;
      const newObj: Blog[] = obj.results as Blog[];
      this.blogs = newObj;
    })
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
