import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceFlightNewsApiResponseReportGet } from '../../models/space-flight-news-api-reponse';
import { Report } from '../../models/report';

import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  url = environment.apiUrl + `/reports`;
  constructor(private readonly http: HttpClient) { }


  getReports(): Observable<SpaceFlightNewsApiResponseReportGet> {
    return this.http.get<SpaceFlightNewsApiResponseReportGet>(this.url);
  }

  getReportById(id: string): Observable<Report> {
    const uri =  this.url + `/${id}/`;
    return this.http.get<Report>(uri);
  }
}
