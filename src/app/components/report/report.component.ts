import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReportsService } from '../../services/reports/reports.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Report } from '../../models/report';
import { Title } from '@angular/platform-browser';
import { Subscription, map, switchMap, tap } from 'rxjs';

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
export class ReportComponent {
  id: string = '';
  report$ = this.route.params.pipe(
    map((x) => x['id']),
    switchMap((id) =>  this.reportsService.getReportById(id)),
    tap((report: Report) => this.titleService.setTitle('Report ' + report?.title))
  );

  constructor(private reportsService: ReportsService,
              private route: ActivatedRoute,
              private titleService: Title) {             
                }

}
