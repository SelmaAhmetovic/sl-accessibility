import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private readonly http: HttpClient) { }

  getArticles(): Observable<HttpResponse<any>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/articles/`;
    return this.http.request<any>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }

  getArticleById(id: any): Observable<HttpResponse<any>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/articles/${id}/`;
    return this.http.request<any>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }
}
