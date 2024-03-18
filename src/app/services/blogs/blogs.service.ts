import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../models/blog';
import { SpaceFlightNewsApiResponseBlogGet } from '../../models/space-flight-news-api-reponse';

import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  
  url = environment.apiUrl + `/blogs`;

  constructor(private readonly http: HttpClient) { }

  getBlogs(): Observable<SpaceFlightNewsApiResponseBlogGet> {
    return this.http.get<SpaceFlightNewsApiResponseBlogGet>(this.url);
  }

  getBlogById(id: string): Observable<Blog> {
    const uri =  this.url + `/${id}/`;
    return this.http.get<Blog>(uri);
  }
}
