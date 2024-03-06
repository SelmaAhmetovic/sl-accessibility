import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private readonly http: HttpClient) { }

  getReports(): Observable<HttpResponse<any>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/reports/`;
    return this.http.request<any>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }

  getReportById(id: any): Observable<HttpResponse<any>> {
    const uri = `https://api.spaceflightnewsapi.net/v4/reports/${id}/`;
    return this.http.request<any>('get', uri, {
        observe: 'response',
        responseType: 'json',
        withCredentials: false,
    });
  }
}
