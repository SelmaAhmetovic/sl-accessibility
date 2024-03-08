import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../../models/response-type';
import { ResultsType } from '../../models/results-type';
import { Article } from '../../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private readonly http: HttpClient) { }

  getArticles(): Observable<HttpResponse<ResponseType<ResultsType>>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/articles/`;
    return this.http.request<ResponseType<ResultsType>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }

  getArticleById(id: string): Observable<HttpResponse<ResponseType<Article>>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/articles/${id}/`;
    return this.http.request<ResponseType<Article>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }
}
