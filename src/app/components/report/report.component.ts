import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReportsService } from '../../services/reports/reports.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Report } from '../../models/report';
import { HttpResponse } from '@angular/common/http';
import { ResponseType } from '../../models/response-type';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit{
  id: string = '';
  report: Report | undefined;
  constructor(private reportsService: ReportsService,
              private route: ActivatedRoute) {

  this.route.params.subscribe(
    (params: Params) => {
      this.id = params['id'];
    });
  
  }

  ngOnInit(): void {
    this.reportsService.getReportById(this.id).subscribe((response: HttpResponse<ResponseType<Report>>) => {
      const report: Report = response.body as unknown as Report;
      this.report = report;
    })
  }
}
