import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../../models/response-type';
import { ResultsType } from '../../models/results-type';
import { Report } from '../../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private readonly http: HttpClient) { }

  getReports(): Observable<HttpResponse<ResponseType<ResultsType>>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/reports/`;
    return this.http.request<ResponseType<ResultsType>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }

  getReportById(id: string): Observable<HttpResponse<ResponseType<Report>>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/reports/${id}/`;
    return this.http.request<ResponseType<Report>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }
}
