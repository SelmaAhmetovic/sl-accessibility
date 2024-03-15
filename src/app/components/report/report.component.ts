import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReportsService } from '../../services/reports/reports.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Report } from '../../models/report';
import { Title } from '@angular/platform-browser';
import { Subscription, map } from 'rxjs';

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
  report: Report | undefined;

  constructor(private reportsService: ReportsService,
              private route: ActivatedRoute,
              private titleService: Title) {

                this.route.params.subscribe(
                  (params: Params) => {
                    this.id = params['id'];
                    if(this.id) {
                      const subscription: Subscription = this.reportsService.getReportById(this.id)
                      .pipe(
                        map(r => r)).subscribe(
                          (response: Report) => {
                            this.report = response;
                            this.titleService.setTitle('Report ' + this.report?.title);
                            subscription.unsubscribe();
                          }
                        );
                      }
                    });
                
                }

}
