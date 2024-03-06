import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private readonly http: HttpClient) { }

  getBlogs(): Observable<HttpResponse<any>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/blogs/`;
    return this.http.request<any>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }

  getBlogById(id: any): Observable<HttpResponse<any>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/blogs/${id}/`;
    return this.http.request<any>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }
}
