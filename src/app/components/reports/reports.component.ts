import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Report } from '../../models/report';
import { HttpResponse } from '@angular/common/http';
import { ResponseType } from '../../models/response-type';
import { ResultsType } from '../../models/results-type';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {

  reports: Report[] | undefined;
  constructor(private reportsService: ReportsService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.reportsService.getReports().subscribe((response: HttpResponse<ResponseType<ResultsType>>) => {
      const obj: ResultsType = response?.body as unknown as ResultsType;
      const newObj: Report[] = obj.results as Report[];
      this.reports = newObj;
    })
  }

  navigateToReport(id: number) {
    this.router.navigate(['/reports', id]);
  }

  checkKeyboardPress(event: KeyboardEvent, id: number){
    if(event.key === "Enter") {
      this.navigateToReport(id)
      return;
    }
    if(event.key === "Tab") {
      return;
    }
  }

}
