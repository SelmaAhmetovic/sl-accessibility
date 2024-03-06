import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReportsService } from '../../services/reports/reports.service';
import { ActivatedRoute } from '@angular/router';

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
  id: any;
  report: any;
  constructor(private reportsService: ReportsService,
              private route: ActivatedRoute) {

  this.route.params.subscribe(
    (params: any) => {
      this.id = params.id;
    });
  
  }

  ngOnInit(): void {
    this.reportsService.getReportById(this.id).subscribe((response: any) => {
      this.report = response.body;
    })
  }
}
