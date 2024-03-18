import { Component, Input, ViewChild, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { CommonModule } from '@angular/common';
import { Subject, Subscription } from 'rxjs';
import { SideContentComponent } from '../side-content/side-content.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    SideContentComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnDestroy { 
  @Input() changing!: Subject<boolean>;
  @Input() isMobile = false;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isCollapsed = true;

  subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.changing.subscribe(() => { 
      this.toggleMenu();
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

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

  
  checkKeyboardPress(event: KeyboardEvent, route: string){
    if(event.key === "Enter") {
      this.navigate(route)
      return;
    }
    if(event.key === "Tab") {
      return;
    }
  }

}
