//import { SidebarComponent } from './core/sidebar/sidebar.component';
//import { MainComponent } from './core/main/main.component';
//import { ToolbarComponent } from './core/toolbar/toolbar.component';

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Subject, Subscription } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SideContentComponent } from './core/side-content/side-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //SidebarComponent, 
    //MainComponent,
    CommonModule,
    //ToolbarComponent, 
    RouterOutlet,
    MatSidenavModule,
    MatSidenav,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    SideContentComponent,
    MatToolbarModule,

    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy{
  title = 'material-responsive-sidenav';
  //isMobile= true;
  changingValue: Subject<boolean> = new Subject();

  @Input() changing!: Subject<boolean>;
  @Input() isMobile = false;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isCollapsed = true;

  breakpointSubscription: Subscription;

  constructor(private observer: BreakpointObserver,
              private router: Router) {

    this.breakpointSubscription =this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
    if(screenSize.matches){
      this.isMobile = true;
    } else {
      this.isMobile = false;
     }
    });
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

  /*toggleMenu() {
    this.changingValue.next(true);
  }*/

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }

}

navigate(route: string) {
  this.router.navigate([route]);
}


checkKeyboardPress(event: KeyboardEvent, route?: string){
  if(event.key === "Enter" && route) {
    this.navigate(route)
    return;
  }
  if(event.key === "Enter" && !route) {
    this.toggleMenu()
    return;
  }
  if(event.key === "Tab") {
    return;
  }
}

}
