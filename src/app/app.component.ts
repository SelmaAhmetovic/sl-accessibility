import { SidebarComponent } from './core/sidebar/sidebar.component';
import { MainComponent } from './core/main/main.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent, 
    MainComponent,
    CommonModule,
    ToolbarComponent, 
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'material-responsive-sidenav';
  isMobile= true;
  changingValue: Subject<boolean> = new Subject();

  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    this.changingValue.next(true);
  }

}
