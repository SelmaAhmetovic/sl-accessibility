import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceFlightNewsApiResponseArticlesGet } from '../../models/space-flight-news-api-reponse';
import { Article } from '../../models/article';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url = environment.apiUrl + `/articles`;

  constructor(private readonly http: HttpClient) { }

  getArticles(): Observable<SpaceFlightNewsApiResponseArticlesGet> {
    return this.http.get<SpaceFlightNewsApiResponseArticlesGet>(this.url);
  }

  getArticleById(id: string): Observable<Article> {
    const uri =  this.url + `/${id}/`;
    return this.http.get<Article>(uri);
  }
}
