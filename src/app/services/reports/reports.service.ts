import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../../models/response-type';
import { ResultsType } from '../../models/results-type';
import { Report } from '../../models/report';

import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private readonly http: HttpClient) { }

  getReports(): Observable<HttpResponse<ResponseType<ResultsType>>> {
    const uri = environment.apiUrl + `/reports/`;
    return this.http.request<ResponseType<ResultsType>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }

  getReportById(id: string): Observable<HttpResponse<ResponseType<Report>>> {
    const uri =environment.apiUrl + `/reports/${id}/`;
    return this.http.request<ResponseType<Report>>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }
}
