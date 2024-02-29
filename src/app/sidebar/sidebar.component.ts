import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MainComponent } from '../main/main.component';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { SideContentComponent } from '../side-content/side-content.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    SideContentComponent,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit { 
  @Input() changing!: Subject<boolean>;
  @Input() isMobile = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isCollapsed = true;

  ngOnInit(){
    this.changing.subscribe(v => { 
      this.toggleMenu();
    });
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

}
