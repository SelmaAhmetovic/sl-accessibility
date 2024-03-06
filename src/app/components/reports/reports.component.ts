import { Component } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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
export class ReportsComponent {

  reports: any;
  constructor(private reportsService: ReportsService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.reportsService.getReports().subscribe((response: any) => {
      this.reports = response.body.results;
    })
  }

  navigateToReport(id: number) {
    this.router.navigate(['/reports', id]);
  }

}
