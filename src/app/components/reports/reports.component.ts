import { Component } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { map } from 'rxjs';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  
  reports$ = this.reportsService.getReports()
    .pipe(
      map(r => r.results)
    );

  constructor(private reportsService: ReportsService,
              private router: Router) {

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
