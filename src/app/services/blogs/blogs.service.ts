import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../../models/response-type';
import { Blog } from '../../models/blog';
import { ResultsType } from '../../models/results-type';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private readonly http: HttpClient) { }

  getBlogs(): Observable<HttpResponse<ResponseType<ResultsType>>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/blogs/`;
    return this.http.request<ResponseType<ResultsType>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }

  getBlogById(id: string): Observable<HttpResponse<ResponseType<Blog>>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/blogs/${id}/`;
    return this.http.request<ResponseType<Blog>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }
}
