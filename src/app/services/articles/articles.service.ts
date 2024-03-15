import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../../models/response-type';
import { ResultsType, SpaceFlightNewsApiResponseArticlesGet } from '../../models/results-type';
import { Article } from '../../models/article';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url = environment.apiUrl + `/articles`;

  constructor(private readonly http: HttpClient) { }

  getArticles(): Observable<HttpResponse<ResponseType<ResultsType>>> {
    const uri = environment.apiUrl + `/articles/`;
    return this.http.request<ResponseType<ResultsType>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }

  getArticlesV2(): Observable<SpaceFlightNewsApiResponseArticlesGet> {
    return this.http.get<SpaceFlightNewsApiResponseArticlesGet>(this.url);
  }

  getArticleById(id: string): Observable<HttpResponse<ResponseType<Article>>> {
    const uri =  environment.apiUrl + `/articles/${id}/`;
    return this.http.request<ResponseType<Article>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }
}
