import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

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
export class AppComponent {
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

  toggleMenu($event?: any) {
    this.changingValue.next(true);
  }

}
